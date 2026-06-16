import { DUMMY_EXPENSES } from "@/constants/dummy-data";
import { DUMMY_EXPENSES_TYPES } from "@/types";
import { createContext, useReducer } from "react";

type ExpensesTypes = Omit<DUMMY_EXPENSES_TYPES, "id">;

interface ExpensesContextType {
  expenses: DUMMY_EXPENSES_TYPES[];
  addExpense: (expenseData: ExpensesTypes) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expenseData: ExpensesTypes) => void;
}

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: ({ amount, date, description }: ExpensesTypes) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (
    id: string,
    { amount, date, description }: ExpensesTypes,
  ) => {},
});

interface ExpensesContextProviderProps {
  children: React.ReactNode;
}

type Action =
  | { type: "ADD"; payload: ExpensesTypes }
  | { type: "DELETE"; payload: string }
  | { type: "UPDATE"; payload: { id: string; data: ExpensesTypes } };

const expensesReducer = (state: DUMMY_EXPENSES_TYPES[], action: Action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: new Date().toString() + Math.random().toString(),
          ...action.payload,
        },
      ];

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex((expense) => {
        return expense.id === action.payload.id;
      });
      const updatableItem = state[updatableExpenseIndex];

      const updatedItem = {
        ...updatableItem,
        ...action.payload.data,
      };

      const updatedExpenses = [...state];

      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;

    case "DELETE":
      const deleteDummyData = state.filter((expense) => {
        return expense.id !== action.payload;
      });

      console.log(state.length, deleteDummyData.length);

      return deleteDummyData;

    default:
      return state;
  }
};

const ExpensesContextProvider = ({
  children,
}: ExpensesContextProviderProps) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData: ExpensesTypes) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id: string) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id: string, expensesData: ExpensesTypes) => {
    dispatch({ type: "UPDATE", payload: { id, data: expensesData } });
  };

  return (
    <ExpensesContext.Provider
      value={{
        addExpense,
        deleteExpense,
        updateExpense,
        expenses: expensesState,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;

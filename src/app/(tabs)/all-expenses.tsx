import ExpensesOutput from "@/components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "@/store/expenses-context";
import { useContext } from "react";

const AllExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput expensesPeriod="Total" expenses={expenseCtx.expenses} />
  );
};

export default AllExpenses;

export interface ExpensesTypes {
  amount: number | string;
}

export interface DUMMY_EXPENSES_TYPES extends ExpensesTypes {
  id: string;
  date: Date | string;
  description: string;
}

export interface InputValuesProps {
  date: string | Date;
  description: string;
  amount: string | number;
}

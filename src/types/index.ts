export interface ExpensesTypes {
  amount: number;
}

export interface DUMMY_EXPENSES_TYPES extends ExpensesTypes {
  id: string;
  date: Date;
  description: string;
}
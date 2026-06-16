export interface ExpensesTypes {
  amount: number | string;
}

export interface DUMMY_EXPENSES_TYPES extends ExpensesTypes {
  id: string;
  date: Date | string;
  description: string;
}

export interface InputValuesProps {
  date: {
    isValid: boolean;
    value: Date | string;
  };
  description: {
    value: string;
    isValid: boolean;
  };
  amount: {
    isValid: boolean;
    value: string | number;
  };
}

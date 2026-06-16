import { DUMMY_EXPENSES_TYPES } from "@/types";

export const DUMMY_EXPENSES: DUMMY_EXPENSES_TYPES[] = [
  {
    id: "e1",
    amount: 59.99,
    date: new Date("2026-12-19"),
    description: "A pair of shoes",
  },
  {
    id: "e2",
    amount: 89.99,
    date: new Date("2026-01-05"),
    description: "A pair of trousers",
  },
  {
    id: "e3",
    amount: 5.99,
    description: "Soma bananas",
    date: new Date("2026-12-01"),
  },
  {
    id: "e4",
    amount: 14.99,
    description: "A book",
    date: new Date("2026-02-19"),
  },
  {
    id: "e5",
    amount: 18.99,
    description: "Another book",
    date: new Date("2026-02-18"),
  },
];

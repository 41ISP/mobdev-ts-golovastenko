import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IExpense } from "../types";
import { version } from "react";

interface IExspenseStore {
    expenses: IExpense[],
    addExpense: (data: IExpense) => void,
    removeExpense: (id: string) => void,

}
export const useExpensesStore = create<IExspenseStore>()(
    persist(
        (set) => ({
        expenses: [],
        addExpense: (data) =>
            set((v) => ({expenses: [...v.expenses, data] })),
        removeExpense: (id) =>
            set((v) => ({
            expenses: v.expenses.filter((e) => e.id !== id
        )})),
    }),
    {name: "expanses", storage: createJSONStorage(() => localStorage)}),
)
export interface IExpense {
    id: string,
    title: string,
    amount: number
    category?: TCategory
}

export type TCategory = "food" | "transport" | "home" | "fun" | "other"
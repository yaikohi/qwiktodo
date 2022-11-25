import { createContext } from "@builder.io/qwik";

interface TodosStore {
  todos: { id: number; title: string; done: boolean }[];
}
export const TodosContext = createContext<TodosStore>("Todos");

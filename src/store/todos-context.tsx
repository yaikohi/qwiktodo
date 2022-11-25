import { createContext } from "@builder.io/qwik";

interface TodosStore {
  todos: { title: string; done: boolean }[];
}
export const TodosContext = createContext<TodosStore>("Todos");

export type Todo = {
  id: number;
  done: boolean;
  title: string;
};
export type Todos = Todo[];

export type TodosStore = {
  todos: Todos[];
};

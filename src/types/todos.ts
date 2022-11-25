export type Todo = {
  // id: string;
  done: boolean;
  title: string;
};
export type Todos = Todo[];

export type TodosStore = {
  todos: Todos[];
};

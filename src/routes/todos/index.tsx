import { component$, useContext } from "@builder.io/qwik";
import AddTodoCard from "~/components/todo/add-todo-card";
import { TodosContext } from "~/store/todos-context";
import { Todo } from "~/types/todos";

export default component$(() => {
  const store = useContext(TodosContext);

  return (
    <div>
      <h1 class="text-4xl text-violet-800 font-bold">Todos!</h1>

      <section class="p-4 my-4 rounded-2xl bg-slate-300 max-w-md"></section>
      <AddTodoCard />
      <section>
        {/* LIST TODOS */}
        <ul class="flex flex-col gap-2 bg-slate-200 max-w-xs max-h-96 overflow-y-scroll">
          <h2 class="text-xl">Todo list</h2>
          {store.todos &&
            store.todos.slice(0, 10).map((todo: Todo) => (
              <li class="bg-slate-300 rounded-md p-4">
                <p>{todo.title}</p>
                <p>{todo.id}</p>

                {/* REMOVE TODO */}
                <button class="px-2 py-1 bg-violet-50 rounded-xl m-1 active:bg-violet-200 hover:bg-violet-100">
                  Delete
                </button>

                {/* EDIT TODO */}
                <button class="px-2 py-1 bg-violet-50 rounded-xl m-1 active:bg-violet-200 hover:bg-violet-100">
                  Edit
                </button>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
});

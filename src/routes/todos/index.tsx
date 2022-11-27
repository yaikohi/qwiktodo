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
        <ul class="flex flex-col gap-2 bg-slate-50 max-w-md p-8 max-h-[900px] overflow-y-scroll">
          <h2 class="text-xl">Todo list</h2>
          {store.todos &&
            store.todos.slice(0, 10).map((todo: Todo) => (
              <li class="bg-violet-200 rounded-md p-4">
                <div class="px-4 my-2 ">
                  <p class="font-bold">{todo.title}</p>
                  <p class="italic text-sm">{todo.id}</p>
                </div>
                <div class="">
                  <button
                    onClick$={() => {
                      store.todos = store.todos.filter(
                        (currentTodo) => currentTodo.id !== todo.id
                      );
                    }}
                    class="px-2 py-1 bg-yellow-100 rounded-xl m-1 active:bg-yellow-300 hover:bg-yellow-200"
                  >
                    Delete
                  </button>

                  {/* <button class="px-2 py-1 bg-violet-50 rounded-xl m-1 active:bg-violet-200 hover:bg-violet-100">
                    Edit
                  </button> */}
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
});

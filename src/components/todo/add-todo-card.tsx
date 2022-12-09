import { component$, useContext, useStore } from "@builder.io/qwik";
import { TodosContext } from "~/store/todos-context";
import { Todo } from "~/types/todos";

export default component$(() => {
  const todoStore = useStore<Todo>({
    id: 0,
    title: "",
    done: false,
  });

  const store = useContext(TodosContext);
  return (
    <div class="flex p-2 bg-slate-200 m-2 rounded-md max-h-96">
      {store?.todos && (
        <>
          <input
            class="rounded-xl px-2 py-1"
            type="text"
            onInput$={(ev) => {
              todoStore.title = (ev.target as HTMLInputElement).value;
              console.log(todoStore.title);
            }}
          />
          <button
            type="submit"
            class="px-2 py-1 bg-violet-50 rounded-xl m-1 active:bg-violet-200 hover:bg-violet-100"
            onClick$={() => {
              todoStore.id = store.todos.length + 1;
              store.todos.push({ ...todoStore });
            }}
          >
            Add
          </button>
        </>
      )}
    </div>
  );
});

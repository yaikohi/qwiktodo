import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="bg-violet-800 p-4 text-yellow-200">
      <ul class="flex gap-4">
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/todos">Todos</a>
        </li>
      </ul>
    </header>
  );
});

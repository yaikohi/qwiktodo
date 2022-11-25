import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1 class="text-4xl text-violet-800 font-bold">Hello!</h1>
      <section class="p-4 my-4 rounded-2xl bg-slate-300 max-w-xs">
        <h2 class="text-2xl text-violet-800 font-semibold">
          Empty page here! :D
        </h2>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

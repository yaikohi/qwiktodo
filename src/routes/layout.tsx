import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main class="mx-auto max-w-2xl">
        <Slot />
      </main>
      <footer class="p-4 bg-violet-800 text-yellow-200 min-w-full absolute inset-x-0 bottom-0">
        <a href="https://github.com/yaikohi" target="_blank">
          made with ♡ by yaikohi
        </a>
      </footer>
    </>
  );
});

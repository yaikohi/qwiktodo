import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main class="h-screen mx-auto max-w-xl">
        <section>
          <Slot />
        </section>
      </main>
      <footer class="p-4 bg-violet-800 text-yellow-200">
        <a href="https://github.com/yaikohi" target="_blank">
          made with ♡ by yaikohi
        </a>
      </footer>
    </>
  );
});

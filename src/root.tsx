import {
  component$,
  useContextProvider,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import globalStyles from "./global.css?inline";
import { TodosContext } from "./store/todos-context";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  /**
   * The context of the application.
   *
   * Should be moved into localstorage or a dedicated database!
   */
  const todos = [
    {
      title: "help",
      done: false,
    },
    {
      title: "help1",
      done: false,
    },

    {
      title: "help1",
      done: false,
    },

    {
      title: "help2",
      done: false,
    },

    {
      title: "help3",
      done: false,
    },

    {
      title: "help4",
      done: false,
    },
  ];

  useContextProvider(
    TodosContext,
    useStore(
      {
        todos,
      },
      { recursive: true }
    )
  );

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en" class="bg-yellow-200">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});

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
      id: 1,
      title: "help1",
      done: false,
    },
    {
      id: 2,
      title: "help2",
      done: false,
    },
    {
      id: 3,
      title: "help3",
      done: false,
    },
    {
      id: 4,
      title: "help4",
      done: false,
    },
    {
      id: 5,
      title: "help5",
      done: false,
    },
    {
      id: 6,
      title: "help6",
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
      <body lang="en" class="bg-yellow-200 flex flex-col h-screen">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});

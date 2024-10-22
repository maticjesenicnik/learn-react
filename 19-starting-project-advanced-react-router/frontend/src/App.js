import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { action as manipulateEventAction } from "./components/EventForm";
import EditEvent from "./pages/EditEvent";
import Error from "./pages/Error";
import EventDetail, { deleteEventAction, loader as eventDetailLoader } from "./pages/EventDetail";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRootLayout";
import Home from "./pages/Home";
import NewEvent from "./pages/NewEvent";
import Newsletter, { action as newsletterAction } from "./pages/Newsletter";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

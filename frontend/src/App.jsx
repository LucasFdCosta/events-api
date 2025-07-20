import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { action as manipulateEventActionFn } from './components/EventForm';
import { EditEventPage } from './pages/EditEventPage';
import { ErrorPage } from './pages/ErrorPage';
import {
  action as deleteEventDetailActionFn,
  EventsDetailPage,
  loader as getEventDetailLoaderFn,
} from './pages/EventDetailPage';
import { EventsPage, loader as eventsLoaderFn } from './pages/EventsPage';
import { EventsRootLayout } from './pages/EventsRootLayout';
import { HomePage } from './pages/HomePage';
import { NewEventPage } from './pages/NewEventPage';
import { RootLayout } from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoaderFn,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: getEventDetailLoaderFn,
            children: [
              {
                index: true,
                element: <EventsDetailPage />,
                action: deleteEventDetailActionFn,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventActionFn,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventActionFn,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

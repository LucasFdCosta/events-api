import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EditEventPage } from './pages/EditEventPage';
import { ErrorPage } from './pages/ErrorPage';
import {
  EventsDetailPage,
  loader as eventDetailLoaderFn,
} from './pages/EventDetailPage';
import { EventsPage, loader as eventsLoaderFn } from './pages/EventsPage';
import { EventsRootLayout } from './pages/EventsRootLayout';
import { HomePage } from './pages/HomePage';
import { NewEventPage, action as newEventActionFn } from './pages/NewEventPage';
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
            loader: eventDetailLoaderFn,
            children: [
              {
                index: true,
                element: <EventsDetailPage />,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
              },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: newEventActionFn },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

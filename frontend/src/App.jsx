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
            element: <EventsDetailPage />,
            loader: eventDetailLoaderFn,
          },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

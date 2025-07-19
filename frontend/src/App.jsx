import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EditEventPage } from './pages/EditEventPage';
import { EventsDetailPage } from './pages/EventDetailPage';
import { EventsPage, loader as eventsLoaderFn } from './pages/EventsPage';
import { EventsRootLayout } from './pages/EventsRootLayout';
import { HomePage } from './pages/HomePage';
import { NewEventPage } from './pages/NewEventPage';
import { RootLayout } from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoaderFn
          },
          { path: ':eventId', element: <EventsDetailPage /> },
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

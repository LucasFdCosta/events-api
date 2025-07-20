import { useRouteLoaderData } from 'react-router-dom';
import { EventItem } from '../components/EventItem';

export function EventsDetailPage() {
  const data = useRouteLoaderData('event-detail');

  return <EventItem event={data.event} />;
}

export async function loader({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: 'Could not fetch details for selected event.',
      }),
      {
        status: 500,
        statusText: 'Could not fetch details for selected event.',
      }
    );
  } else {
    return response;
  }
}

import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

export function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {loadedEvents => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
      status: 500,
      statusText: 'Could not fetch events.',
    });
  } else {
    const resData = await response.json();

    return resData.events;
  }
}

export function loader() {
  return {
    events: loadEvents(),
  };
}

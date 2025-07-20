import { Suspense } from 'react';
import { Await, redirect, useRouteLoaderData } from 'react-router-dom';
import { EventItem } from '../components/EventItem';
import EventsList from '../components/EventsList';

export function EventsDetailPage() {
  const { event, events } = useRouteLoaderData('event-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {loadedEvents => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
      status: 500,
      statusText: 'Could not fetch events.',
    });
  } else {
    const resData = await response.json();

    return resData.event;
  }
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

export async function loader({ request, params }) {
  return {
    event: await loadEvent(params.eventId),
    events: loadEvents(),
  };
}

export async function action({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not delete event.' }), {
      status: 500,
      statusText: 'Could not delete event.',
    });
  }

  return redirect('/events');
}

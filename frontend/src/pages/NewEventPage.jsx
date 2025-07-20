import { redirect } from 'react-router-dom';
import { EventForm } from '../components/EventForm';

export function NewEventPage() {
  return <EventForm />;
}

export async function action({ request }) {
  const formData = await request.formData();

  const eventData = {
    title: formData.get('title'),
    image: formData.get('image'),
    date: formData.get('date'),
    description: formData.get('description'),
  };

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not create event.' }), {
      status: 500,
      statusText: 'Could not create event.',
    });
  }

  return redirect('/events');
}

import { useRouteLoaderData } from 'react-router-dom';
import { EventForm } from '../components/EventForm';

export function EditEventPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <EventForm event={data.event} />
  );
}

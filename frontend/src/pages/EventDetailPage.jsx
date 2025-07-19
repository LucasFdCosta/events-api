import { useParams } from 'react-router-dom';

export function EventsDetailPage() {
  const params = useParams();

  return (
    <div>
      <h1>Event Detail Page</h1>
      <p>Details for event ID: {params.eventId}</p>
    </div>
  );
}

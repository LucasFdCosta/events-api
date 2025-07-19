import { Link } from 'react-router-dom';

const EVENTS = [
  { id: 1, title: 'Event 1' },
  { id: 2, title: 'Event 2' },
];

export function EventsPage() {
  return (
    <div>
      <h1>Events Page</h1>
      <p>Welcome to the Events Page!</p>
      <ul>
        {EVENTS.map(event => (
          <li key={event.id}>
            <Link to={`${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

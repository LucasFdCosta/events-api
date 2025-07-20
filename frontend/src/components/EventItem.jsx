import { Link, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

export function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    if (window.confirm('Are you sure you want to delete this event?')) {
      submit(null, {
        method: 'DELETE',
      });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

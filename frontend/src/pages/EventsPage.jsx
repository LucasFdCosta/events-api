import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

export function EventsPage() {
  const events = useLoaderData();

  return <EventsList events={events} />;
}
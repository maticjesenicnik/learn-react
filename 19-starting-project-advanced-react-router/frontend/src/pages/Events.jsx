import React from "react";
import { Link } from "react-router-dom";
import { DUMMY_EVENTS } from "../util/events";

export default function Events() {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {DUMMY_EVENTS.map(event => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

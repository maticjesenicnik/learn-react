import React from "react";
import { useParams } from "react-router-dom";
import { DUMMY_EVENTS } from "../util/events";

export default function EventDetail() {
  const { id } = useParams();
  const event = DUMMY_EVENTS.find(event => event.id === id);

  return (
    <>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </>
  );
}

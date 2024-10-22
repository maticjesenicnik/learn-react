import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();

  return (
    <>
      <div style={{ textAlign: "center" }}></div>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...
  } else {
    const data = await response.json();
    return data.events;
  }
}

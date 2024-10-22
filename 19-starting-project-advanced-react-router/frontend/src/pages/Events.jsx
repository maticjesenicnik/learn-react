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

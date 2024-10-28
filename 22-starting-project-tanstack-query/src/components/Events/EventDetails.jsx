import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import Header from "../Header.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const {
    mutate: mutateDeleteEvent,
    isPending: isDeletePending,
    isError: isDeleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries(["events"]);
      navigate("/events");
    },
  });

  const handleDeleteEvent = () => {
    mutateDeleteEvent({ id });
  };

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {data && (
        <article id="event-details">
          {isPending && <p style={{ textAlign: "center" }}>Loading event information...</p>}
          {isError && <ErrorBlock title="Error loading event information" message={error.info?.message || "There was an error while retrieving event information"} />}
          {isDeleteError && <ErrorBlock title="Error deleting event" message="There was an erorr deleting the event. Please try again later" />}
          <header>
            <h1>{data.title}</h1>
            <nav>
              {isDeletePending && <p>Deleting event...</p>}
              {!isDeletePending && (
                <>
                  <button onClick={handleDeleteEvent}>Delete</button>
                  <Link to="edit">Edit</Link>
                </>
              )}
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`${data.date} ${data.time}`}>
                  {data.date} {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

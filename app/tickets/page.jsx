import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default function Tickets() {
  return (
    <div>
        <nav>
            <div>
                <h2>Tickets</h2>
                <p><small></small>Currently open tickets.</p>
            </div>
        </nav>
        <Suspense fallback={<Loading />}>
            <TicketList />
        </Suspense>

    </div>
  )
}


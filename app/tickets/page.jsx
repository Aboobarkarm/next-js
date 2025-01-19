import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from '../loading';

export default function Tickets() {
  return (
    <main>
     <nav>
      <div>
        <h2>Ticket</h2>
        <p><small>Currently open ticket</small></p>
      </div>
     </nav>
     <Suspense fallback={<Loading />}>
     <TicketList />
     </Suspense>
    </main>
  )
}

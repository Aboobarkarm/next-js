import Loading from '@/app/loading'
import { notFound } from "next/navigation";
import { Suspense } from 'react';
import Link from "next/link"
import DeleteButton from '@/app/components/DeleteButton';

export const dynamicParams = true;

export async function getStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

async function getTicket(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function TicketDetails({ params }) {
  
  const { id } = await params;

  const TicketContent = async () => {
    const ticket = await getTicket(id)

    return (
      <div className='card'>
        <p>{ticket.title}</p>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.level}`}>
          {ticket.level} level
        </div>
        <DeleteButton id={id} />
        <Link href={`/tickets/${ticket.id}/update`}>
           <button className="btn-primary mx-1">Update</button>
        </Link>
      </div>
    
    )
  }


  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <Suspense fallback={<Loading />}>
      <TicketContent />
      </Suspense>
    </main>
  )
}

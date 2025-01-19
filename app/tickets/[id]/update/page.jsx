
import UpdateForm from "@/app/components/UpdateForm"

async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    cache: "no-store",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch ticket")
  }
  return res.json()
  
}

export default async function UpdateTicketPage({ params }) {
  const { id } = await params;
  const ticket = await getTicket(id);

  return (
    <main>
      <h1 className="text-xl font-bold mb-5">Update Ticket</h1>
      <UpdateForm ticket={ticket} />
    </main>
  )
}

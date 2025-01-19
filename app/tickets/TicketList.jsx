import Link from "next/link"

async function getTickets() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  try {
    const res = await fetch('http://localhost:4000/tickets', {
      next: {
        revalidate: 0
      }
    })

    if (!res.ok) {
      throw Error ('faild to get ticket')
    }

    return res.json()

  } catch (err) {
    console.log(err.message)
  }
}


export default async function TicketList() {
  const tickets = await getTickets()
  


  return (
    <>
     {tickets.map((ticket) => (
      <div key={ticket.id} className="card my-5">
        <Link href={`/tickets/${ticket.id}`}>
        <h3>{ticket.title}</h3>
        <p>{ticket.body.slice(0, 200)}...</p>
        <div className={`pill ${ticket.level}`}>
          {ticket.level} level
        </div>
        </Link>
      </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets... </p>
      )}
    </>
  )
}
import { notFound } from 'next/navigation'

async function getTicket(id){
    await new Promise(resolve =>setTimeout(resolve, 3000))

    const res = await fetch("http://localhost:4000/tickets/" + id) 
    
    if (!res.ok) {
        notFound()
    }
    return res.json()
}

async function TicketDetails({params}) {
    const ticket = await getTicket(params.id)
    if (!ticket) {
        // Handle the case where the ticket is not found
        return <div>Ticket not found</div>;
    }
    
  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
    </main>
  )
}

export default TicketDetails
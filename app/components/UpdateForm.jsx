"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { updateTicket } from '../_actions/ticketActions'

export default function UpdateForm({ ticket }) {
  const router = useRouter()

  const [title, setTitle] = useState(ticket?.title || "")
  const [body, setBody] = useState(ticket?.body || "")
  const [level, setLevel] = useState(ticket?.level || "low")
  const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
    if (ticket) {
      setTitle(ticket.title)
      setBody(ticket.body)
      setLevel(ticket.level)
    }
  }, [ticket]) 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTicket = {
      title,
      body,
      level,
      user_email: ticket.user_email,
    };
    setIsLoading(true)

    try {
      
      await updateTicket(ticket.id, updatedTicket)

      setIsLoading(false)
      router.refresh()
      router.push(`/tickets`)
    } catch (err) {
      console.log(err.message)
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          type="text"
        />
      </label>
      <label>
        <span>Body:</span>
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          type="text"
        />
      </label>

      <label>
        <span>Level:</span>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          required
        >
          <option value="low">Low Level</option>
          <option value="medium">Medium Level</option>
          <option value="high">High Level</option>
        </select>
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading && <span>Updating...</span>}
        {!isLoading && <span>Update</span>}
      </button>
    </form>
  )
}

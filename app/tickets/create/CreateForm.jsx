"use client"

import { useRouter } from "next/navigation"
import { useState } from "react" 

export default function CreateForm() {
const router = useRouter()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [level, setLevel] = useState('low')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ticket = {title, body, level, user_email: 'mario123@gmail.com'}
    setIsLoading(true)

    try {
      const res = await fetch('http://localhost:4000/tickets', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticket),
      })
  
      if (!res.ok) {
        throw new Error('Failed to add tickets')
      }

      setIsLoading(false)
      router.refresh()
      router.push('/tickets')
    } catch (error) {
      console.log(error.message)
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
        <span>Task Level:</span>
        <select
        value={level}
        onChange={(e) => setLevel(e.target.value)} 
        required>
          <option value="law">Low Level</option>
          <option value="medium">Medium Level</option>
          <option value="high">High Level</option>
        </select>
      </label>
      <button
      className="btn-primary"
      disabled={isLoading}
      >
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
    
  )
}

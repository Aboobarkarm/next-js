
"use client"

import { deleteTicket } from "@/app/_actions/ticketActions"
import { useRouter } from 'next/navigation'

export default function DeleteButton({ id }) {
  const router = useRouter()

  const handleDelete = async () => {
    const isDeleted = await deleteTicket(id)
    if (isDeleted) {
      router.push('/tickets')
    } else {
      console.log("Failed to delete ticket")
    }
  }

  

  return (
    <>
      <button className="bg-customRed text-white" onClick={handleDelete}>
      Delete
      </button>
    </>
  )
}

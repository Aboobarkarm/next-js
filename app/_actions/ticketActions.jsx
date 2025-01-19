
export async function deleteTicket(id) {
  try {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
      method: "DELETE",
    })

    if (!res.ok) {
      throw new Error(`Failed to delete ticket with id: ${id}`)
    }

    return true
  } catch (err) {
    console.log(err.message)
    return false
  }
}


export async function updateTicket(id, updatedData) {
  try {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })

    if (!res.ok) {
      throw new Error("Failed to update ticket");
    }

    return await res.json()
  } catch (err) {
    console.log(err.message)
    return false
  }
}


import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p className='text-sm leading-6'>Welcome to your dashboard! Here, you can stay updated with important announcements and manage your tasks. We're always working on improving the platform, so check back often for the latest news. If you have any questions, don't hesitate to reach out.</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p> We're excited to announce the addition of a talented developer to our team. Their skills and experience will help us enhance our web applications and make our projects even more successful. Welcome aboard!</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>We're thrilled to announce that our new website is now live! With a fresh design and improved features, we hope it provides a better user experience. Feel free to explore and share your feedback.</p>
      </div>
    </main>
  )
}
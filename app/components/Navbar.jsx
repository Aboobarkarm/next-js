import Image from "next/image"
import Link from "next/link"
import logo from './botmind.jpeg'


export default function Navbar() {
  return (
    <nav>
      <Image
      src={logo}
      width={70}
      alt="botmind"
      quality={100}
      placeholder="blur"
      />
    <h1>BotMind</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">Create</Link>
    </nav>
  )
}

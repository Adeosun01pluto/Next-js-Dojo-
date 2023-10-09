import Link from "next/link"

function Navbar() {
  return (
    <nav>
        {/* <Image */}
        <h1>DOjo</h1>
        <Link href={"/"}>Dashboard</Link>
        <Link href={"/tickets"}>Tickets</Link>
    </nav>
  )
}

export default Navbar
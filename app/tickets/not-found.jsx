import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className="text-center">
      <h2>There was a problem in fetching tickets.</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </main>
  )
}
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Welcome to Interactive Portfolio
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          This is your Next.js + Tailwind CSS project
        </p>
        <Link
          href="#"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8 text-white/80">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 
                    rounded-full bg-[#9397FF] text-black font-semibold 
                    hover:scale-105 active:scale-98 transition-transform"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 
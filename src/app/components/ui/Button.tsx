import { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  href: string
  target?: string
  rel?: string
  className?: string
  'aria-label'?: string
}

export function PrimaryButton({ 
  children, 
  href, 
  className = '',
  ...props 
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 
                 rounded-full bg-[#9397FF] text-black font-semibold 
                 hover:scale-105 active:scale-98 transition-transform
                 focus:outline-none focus:ring-2 focus:ring-[#9397FF] 
                 focus:ring-offset-2 focus:ring-offset-black ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export function SecondaryButton({ 
  children, 
  href, 
  className = '',
  ...props 
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 
                 rounded-full border-2 border-[#9397FF] text-white font-semibold 
                 hover:bg-[#9397FF] hover:text-black hover:scale-105 
                 active:scale-98 transition-all duration-200
                 focus:outline-none focus:ring-2 focus:ring-[#9397FF] 
                 focus:ring-offset-2 focus:ring-offset-black ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
} 
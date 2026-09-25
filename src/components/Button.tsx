import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'outline' | 'outline-dark'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  variant?: Variant
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  onClick,
  type = 'button',
}: ButtonProps) {
  const className = `btn-muadifam btn-muadifam--${variant}`

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

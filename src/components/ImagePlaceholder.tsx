import type { CSSProperties } from 'react'

interface ImagePlaceholderProps {
  label: string
  ratio?: string // e.g. "16 / 9", "4 / 3", "1 / 1"
  className?: string
}

/**
 * Stands in for real photography during development. Renders as an
 * obviously-a-placeholder block (never a convincing fake photo) and
 * shows the intended image path/label so it's easy to find and swap
 * out later.
 */
export default function ImagePlaceholder({ label, ratio, className = '' }: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder ${className}`.trim()}
      style={ratio ? ({ ['--ph-ratio' as string]: ratio } as CSSProperties) : undefined}
      role="img"
      aria-label={label}
    >
      <span>{label}</span>
    </div>
  )
}

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  /** Id of the visible dialog title for `aria-labelledby`. */
  labelledBy: string
  children: React.ReactNode
  className?: string
}

export function Modal({ isOpen, onClose, labelledBy, children, className = '' }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className="modal__backdrop" role="presentation" onClick={onClose}>
      <div
        className={['modal__dialog', className].filter(Boolean).join(' ')}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}

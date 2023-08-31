'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
  title: string
  description: string
}

export function Modal({ children, title, description }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-zinc-900 p-6 rounded-md">
          <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
          <p>{description}</p>
          <Dialog.Close>Fechar</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

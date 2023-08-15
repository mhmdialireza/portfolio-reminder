import { PropsWithChildren, useCallback, useState } from 'react'

import { Dialog } from '@headlessui/react'
type AppModalProps = {
  isOpen: boolean
  closeOnOverlayClick?: () => void
}

const AppModal = ({
  children,
  isOpen,
  closeOnOverlayClick
}: PropsWithChildren<AppModalProps>) => {
  return (
    <Dialog
      className="relative z-50"
      open={isOpen}
      onClose={() => {
        if (closeOnOverlayClick) closeOnOverlayClick()
      }}
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/40" aria-hidden="true"></div>
      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="max-w-[600px] w-[500px]  max-h-[80vh] overflow-y-auto">
            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

type Props = {
  closeOnOverlayClick?: boolean
  isOpen?: boolean
}

const useAppModal = ({
  closeOnOverlayClick = false,
  isOpen = false
}: Props = {}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const open = useCallback(() => setIsModalOpen(true), [])
  const close = useCallback(() => setIsModalOpen(false), [])
  const ModalWrapper = useCallback(
    ({ children }: PropsWithChildren) => {
      return (
        <AppModal
          isOpen={isModalOpen}
          closeOnOverlayClick={closeOnOverlayClick ? close : undefined}
        >
          {children}
        </AppModal>
      )
    },
    [isModalOpen, close, closeOnOverlayClick]
  )
  return { ModalWrapper, close, open, isOpen: isModalOpen }
}

export default useAppModal

import { Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'
import { Fragment,type ReactNode } from 'react'

interface IProps {
    isOpen: boolean;
    title?: string;
    closeModel: () => void;
    children: ReactNode;
}
const Modal = ({ isOpen, title, children, closeModel }: IProps) => {

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModel} __demoMode>
                      <div className="fixed inset-0 backdrop-blur-sm" aria-hidden="true" />
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <DialogPanel
                                transition
                                className=" w-full max-w-md border border-gray-300 rounded-lg bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                            >
                                {title &&
                                    <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                                        {title}
                                    </DialogTitle>}

                                <div className="mt-4">
                                    {children}
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default Modal;
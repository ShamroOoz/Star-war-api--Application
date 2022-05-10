import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { XIcon } from '@heroicons/react/solid';
import { ModalProps } from '../types';

//
const modalRoot = document.getElementById('modal-root') as HTMLElement;

const Modal: React.FC<ModalProps> = ({ show, onClose, children, title }: ModalProps): React.ReactPortal | null => {
    const [isBrowser, setIsBrowser] = useState(false);
    const el = useRef(document.createElement('div'));

    useEffect(() => {
        const current = el.current;
        // We assume `modalRoot` exists with '!'
        modalRoot?.appendChild(current);
        setIsBrowser(true);
        return () => void modalRoot?.removeChild(current);
    }, []);

    const modalContent: JSX.Element | null = show ? (
        <div className="fixed bottom-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75 shadow-xl">
            <div className="bg-white rounded-lg min-w-2xl">
                <div className="flex flex-col items-start p-4">
                    <div className="flex items-center w-full">
                        {title && <div className="text-xl font-medium text-center text-gray-900">{title}</div>}
                        <XIcon
                            className="w-6 h-6 ml-auto text-gray-700 cursor-pointer fill-current"
                            onClick={() => onClose()}
                        />
                    </div>
                    <hr />
                    <div>{children}</div>
                </div>
            </div>
        </div>
    ) : null;

    if (isBrowser) {
        return createPortal(modalContent, el.current);
    } else {
        return null;
    }
};

export default Modal;

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { XIcon } from '@heroicons/react/solid';

type IProps = {
    children: React.ReactNode;
    title: string | number;
    onClose: () => void;
    show: boolean;
};

const Modal: React.FC<IProps> = ({ show, onClose, children, title }: IProps): React.ReactPortal | null => {
    const [isBrowser, setIsBrowser] = useState(false);
    useEffect(() => setIsBrowser(true), []);

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

    return ({
        isBrowser ? (ReactDOM.createPortal(modalContent, document.getElementById('modal-root') as HTMLElement)) : null;
    })
};

export default Modal;

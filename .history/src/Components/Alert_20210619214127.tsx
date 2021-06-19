import React, { useState } from 'react';
type Iprop = {
    reason: unknown;
};
const Alert: React.FC<Iprop> = ({ reason }: Iprop): JSX.Element => {
    const [showAlert, setShowAlert] = useState(true);
    return (
        <React.Fragment>
            {showAlert ? (
                <div className="relative px-6 py-4 mb-4 text-white bg-red-500 border-0 rounded">
                    <span className="inline-block mr-5 text-xl align-middle">
                        <i className="fas fa-bell" />
                    </span>
                    <span className="inline-block mr-8 align-middle">
                        <b className="capitalize"></b>
                        {reason ? 'OoooOoops, something went wrong. Reload....' : 'No Result Found '}
                    </span>
                    <button
                        className="absolute top-0 right-0 mt-4 mr-6 text-2xl font-semibold leading-none bg-transparent outline-none focus:outline-none"
                        onClick={() => setShowAlert(false)}
                    >
                        <span>×</span>
                    </button>
                </div>
            ) : null}
        </React.Fragment>
    );
};

export default Alert;

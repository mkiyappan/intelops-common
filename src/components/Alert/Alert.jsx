import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import '../../assets/style/soft-ui-dashboard-tailwind.css';

const Alert = (props) => {
    const [alertVarient, setAlertVarient] = useState('relative w-full p-4 mb-4 text-white border');
    const [closeAlert, setCloseAlert] = useState(false);

    const { id, varient, children } = props;

    const handleCloseAlert = () => {
        setCloseAlert(true);
    };

    useEffect(() => {
        switch (varient) {
            case 'fuchsia':
                setAlertVarient(`${alertVarient} border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300`);
                break;
            case 'slate':
                setAlertVarient(`${alertVarient} border-solid rounded-lg bg-gradient-to-tl from-slate-600 to-slate-300 border-slate-100`);
                break;
            case 'lime':
                setAlertVarient(`${alertVarient} border-solid rounded-lg bg-gradient-to-tl from-green-600 to-lime-400 border-lime-300`);
                break;
            case 'red':
                setAlertVarient(`${alertVarient} border-red-300 border-solid rounded-lg bg-gradient-to-tl from-red-600 to-rose-400`);
                break;
            case 'orange':
                setAlertVarient(`${alertVarient} border-orange-100 border-solid rounded-lg bg-gradient-to-tl from-red-500 to-yellow-400`);
                break;
            case 'cyan':
                setAlertVarient(`${alertVarient} border-solid rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400 border-cyan-200`);
                break;
            case 'gray':
                setAlertVarient(`${alertVarient} border-solid rounded-lg bg-gradient-to-tl from-gray-400 to-gray-100 border-slate-100`);
                break;
            case 'darkGray':
                setAlertVarient(`${alertVarient} border-solid rounded-lg bg-gradient-to-tl from-gray-900 to-slate-800 border-slate-100`);
                break;
            default:
                setAlertVarient(`${alertVarient} border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300`);
        }
    }, [varient]);

    return (
        <>
            {!closeAlert ? (
                <div
                    alert
                    id={id}
                    className="grid place-items-center w-full min-h-[140px] bg-[#f8fafc] p-6 border border-blue-grey-50 rounded-lg scroll-mt-48 overflow-x-scroll lg:overflow-visible"
                >
                    <div alert class={alertVarient}>
                        {children}
                        <button
                            alert-close
                            type="button"
                            className="box-content absolute top-0 right-0 p-4 text-sm text-white bg-transparent border-0 rounded w-4 h-4 z-2"
                            onClick={handleCloseAlert}
                        >
                            <span aria-hidden="true" className="text-center cursor-pointer">
                                &#10005;
                            </span>
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    );
};

Alert.propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Specify a custom `id` for the `<Alert>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<Alert>`
     */
    className: PropTypes.string,

    /**
     * Specify a custom `varient` for the `<Alert>`
     */
    varient: PropTypes.string
};

export default Alert;

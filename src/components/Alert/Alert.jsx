import React, { useEffect, useState } from 'react';
import '../../assets/style/soft-ui-dashboard-tailwind.css';
import PropTypes from 'prop-types';

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
                            class="box-content absolute top-0 right-0 p-4 text-sm text-white bg-transparent border-0 rounded w-4 h-4 z-2"
                            onClick={handleCloseAlert}
                        >
                            <span aria-hidden="true" class="text-center cursor-pointer">
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
     * Specify a custom `id` for the `<alert>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<b utton>`
     */
    className: PropTypes.string,

    /**
     * Specify a custom `varient` for the `<Chip>`
     */
    varient: PropTypes.string,

    /**
     * Specify the value of the `<input>`
     */
    value: PropTypes.string,

    /**
     * Provide the text that will be read by a screen reader when visiting this
     * control
     */
    label: PropTypes.node,

    /**
     * Optionally provide an `onChange` handler that is called whenever `<input>`
     * is updated
     */
    onChange: PropTypes.func,

    /**
     * Optionally provide an `onClick` handler that is called whenever the
     * `<input>` is clicked
     */
    onClick: PropTypes.func,

    /**
     * Specify the placeholder attribute for the `<input>`
     */
    placeholder: PropTypes.string,

    /**
     * Name attribute of the `<input>` element.
     */
    name: PropTypes.string,

    /**
     * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
     */
    type: PropTypes.string,

    /**
     * The value of the `input` element, required for a controlled component.
     */
    value: PropTypes.any,

    /**
     * If `true`, the label is displayed as required and the `input` element is required.
     * @default false
     */
    required: PropTypes.bool,

    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled: PropTypes.bool
};

export default Alert;

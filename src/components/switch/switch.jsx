import React, { useEffect, useState } from 'react';
import '../../assets/style/soft-ui-dashboard-tailwind.css';
import PropTypes from 'prop-types';

const Switch = (props) => {
    const { id, className, label, checked, disabled = false, onStateChange = () => {} } = props;

    const [checkedState, setCheckedState] = useState(false);

    const handleOnChange = (evt) => {
        setCheckedState(evt.target.checked);
        onStateChange(!checkedState);
    };

    useEffect(() => {
        setCheckedState(checked);
    }, [checked]);

    return (
        <div className={`${className} min-h-6 mb-0.5 flex items-center`}>
            <input
                id={id}
                className="rounded-10 duration-300 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-300 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                type="checkbox"
                disabled={disabled}
                checked={checkedState}
                onClick={handleOnChange}
            />
            {label && (
                <label for={id} className="inline-block pl-3 mb-0 ml-0 font-normal cursor-pointer select-none text-sm text-slate-700">
                    {label}
                </label>
            )}
        </div>
    );
};

Switch.propTypes = {
    /**
     * Specify a custom `id` for the `<switch>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<switch>`
     */
    className: PropTypes.string,

    /**
     * checked of the button component.
     */
    checked: PropTypes.bool,

    /**
     * disabling or enabling the button component
     */
    disabled: PropTypes.bool,

    /**
     * `onStateChange` handler that is called whenever the
     * `<Switch>` is clicked
     */
    onStateChange: PropTypes.func,

    /**
     * Provide the text that will be read by a screen reader when visiting this
     * control
     */
    label: PropTypes.node
};

export default Switch;

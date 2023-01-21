import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/style/soft-ui-dashboard-tailwind.css';

const TextField = (props) => {
    const {
        id,
        className,
        name,
        type,
        value,
        required = false,
        disabled = false,
        varient,
        placeholder,
        label,
        onChange = () => {},
        onClick = () => {}
    } = props;
    const [textboxVarient, setTextboxVarient] = useState(
        'focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none'
    );

    const labelNode = label ? <label htmlFor={id}>{labelText}</label> : null;

    const handleOnChange = (evt) => {
        onChange(evt);
    };
    const handleOnClick = (evt) => {
        onClick(evt);
    };

    useEffect(() => {
        switch (varient) {
            case 'small':
                setTextboxVarient(textboxVarient + ' py-1');
                break;
            case 'default':
                setTextboxVarient(textboxVarient + ' py-2');
                break;
            case 'large':
                setTextboxVarient(textboxVarient + ' py-3');
                break;
            default:
                setTextboxVarient(textboxVarient);
        }
    }, []);

    return (
        <div
            id={id}
            className="grid place-items-center w-full min-h-[140px] bg-[#f8fafc] p-6 border border-blue-grey-50 rounded-lg scroll-mt-48 overflow-x-scroll lg:overflow-visible"
        >
            {labelNode}
            <input
                type={type}
                placeholder={placeholder}
                className={(textboxVarient, className)}
                onChange={handleOnChange}
                onClick={handleOnClick}
                name={name}
                value={value}
                required={required}
                disabled={disabled}
            />
        </div>
    );
};

TextField.propTypes = {
    /**
     * Specify a custom `id` for the `<input>`
     */
    id: PropTypes.string.isRequired,

    /**
     * Specify a custom `className` for the `<b utton>`
     */
    className: PropTypes.string,

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

export default TextField;

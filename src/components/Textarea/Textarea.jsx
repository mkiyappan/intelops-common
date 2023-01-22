import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/style/soft-ui-dashboard-tailwind.css';

const Textarea = (props) => {
    const { id, className, rows = 5, placeholder, name, children, onChange = () => {} } = props;

    const handleOnChange = (evt) => {
        onChange(evt);
    };

    return (
        <textarea
            id={id}
            name={name}
            rows={rows}
            placeholder={placeholder}
            onChange={handleOnChange}
            className={`${className} focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none`}
        >
            {children}
        </textarea>
    );
};

Textarea.propTypes = {
    /**
     * Specify a custom `id` for the `<Textarea>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<Textarea>`
     */
    className: PropTypes.string,

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Specify a `rows` for the `<Textarea>`
     */
    rows: PropTypes.number,

    /**
     * Specify a `placeholder` for the `<Textarea>`
     */
    placeholder: PropTypes.string,

    /**
     * Specify a `name` for the `<Textarea>`
     */
    name: PropTypes.string,

    /**
     * Optionally provide an `onChange` handler that is called whenever `<Textarea>`
     * is updated
     */
    onChange: PropTypes.func
};

export default Textarea;

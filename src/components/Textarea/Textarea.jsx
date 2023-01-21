import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/style/soft-ui-dashboard-tailwind.css';

const Typography = (props) => {
    const { id, className, rows = 5, placeholder, name, children } = props;

    return (
        <textarea
            name={name}
            rows={rows}
            placeholder={placeholder}
            className={`${className} focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none`}
        >
            {children}
        </textarea>
    );
};

Typography.propTypes = {
    /**
     * Specify a custom `id` for the `<Typography>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<Typography>`
     */
    className: PropTypes.string,

    /**
     * Specify a `name` for the `<Typography>`
     */
    name: PropTypes.string
};

export default Typography;

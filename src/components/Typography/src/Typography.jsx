import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/style/soft-ui-dashboard-tailwind.css';

const Typography = (props) => {
    const { id, className, varient, children } = props;

    const getVarient = () => {
        switch (varient) {
            case 'h1':
                return (
                    <h1 id={id} className={className}>
                        {children}
                    </h1>
                );
            case 'h2':
                return (
                    <h2 id={id} className={className}>
                        {children}
                    </h2>
                );
            case 'h3':
                return (
                    <h3 id={id} className={className}>
                        {children}
                    </h3>
                );
            case 'h4':
                return (
                    <h4 id={id} className={className}>
                        {children}
                    </h4>
                );
            case 'h5':
                return (
                    <h5 id={id} className={className}>
                        {children}
                    </h5>
                );
            case 'h6':
                return (
                    <h6 id={id} className={className}>
                        {children}
                    </h6>
                );
            default:
                return (
                    <h5 id={id} className={className}>
                        {children}
                    </h5>
                );
        }
    };

    return <>{getVarient()}</>;
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
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Applies the typography styles.
     * @default 'h5'
     */
    variant: PropTypes.oneOfType([PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']), PropTypes.string])
};

export default Typography;

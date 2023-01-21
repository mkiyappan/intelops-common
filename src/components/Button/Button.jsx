import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import './button.css';
import '../../assets/style/soft-ui-dashboard-tailwind.css';

const Button = (props) => {
    const [buttonVarient, setButtonVarient] = useState(
        'inline-block px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft hover:scale-102'
    );

    const { id, className, varient, type = 'button', disabled = false, colour = 'text-white' } = props;

    useEffect(() => {
        switch (varient) {
            case 'contained':
                setButtonVarient(
                    buttonVarient + ' text-white bg-fuchsia-500 shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs'
                );
                break;
            case 'gradient':
                setButtonVarient(
                    buttonVarient +
                        ' text-white bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs'
                );
                break;
            case 'outlined':
                setButtonVarient(
                    buttonVarient +
                        ' bg-transparent border border-fuchsia-500 shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs text-fuchsia-500'
                );
                break;
            case 'text':
                setButtonVarient(
                    buttonVarient + ' bg-fuchsia-500/0 bg-150 bg-x-25 hover:bg-fuchsia-500/25 active:bg-fuchsia/45 text-fuchsia-500'
                );
                break;
            case 'setIcon':
                setButtonVarient(
                    buttonVarient +
                        'text-white bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs'
                );
                break;
            default:
                setButtonVarient(buttonVarient);
        }
    }, []);

    const handleButtonClick = () => {
        props.onClick();
    };

    return (
        <div className="buttonWrapper">
            {varient === 'setIcon' ? (
                <button id={id} type={type} disabled={disabled} className={(buttonVarient, className)} onClick={handleButtonClick}>
                    {props.children}
                    <FontAwesomeIcon icon={faList} />
                </button>
            ) : (
                <button id={id} type={type} disabled={disabled} className={(buttonVarient, className)} onClick={handleButtonClick}>
                    {props.children}
                </button>
            )}
        </div>
    );
};

Button.propTypes = {
    /**
     * Specify a custom `id` for the `<button>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<b utton>`
     */
    className: PropTypes.string,

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Type of the button component.
     */
    type: PropTypes.string,

    /**
     * disabling or enabling the button component
     */
    disabled: PropTypes.bool,

    /**
     * `onClick` handler that is called whenever the
     * `<button>` is clicked
     */
    onClick: PropTypes.func
};

export default Button;

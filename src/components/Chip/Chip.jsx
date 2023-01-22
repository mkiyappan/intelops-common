import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import '../../assets/style/soft-ui-dashboard-tailwind.css';

const Chip = (props) => {
    const [chipVarient, setChipVarient] = useState(
        'py-2.2 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center bg-gradient-to-tl'
    );

    const { id, className, varient, children } = props;

    useEffect(() => {
        switch (varient) {
            case 'fuchsia':
                setChipVarient(`${chipVarient} from-purple-700 to-pink-500 align-baseline font-bold uppercase leading-none text-white`);
                break;
            case 'slate':
                setChipVarient(`${chipVarient} from-slate-600 to-slate-300 align-baseline font-bold uppercase leading-none text-white`);
                break;
            case 'cyan':
                setChipVarient(`${chipVarient} from-blue-600 to-cyan-400 align-baseline font-bold uppercase leading-none text-white`);
                break;
            case 'lime':
                setChipVarient(`${chipVarient} from-green-600 to-lime-400 align-baseline font-bold uppercase leading-none text-white`);
                break;
            case 'red':
                setChipVarient(`${chipVarient} from-red-600 to-rose-400 align-baseline font-bold uppercase leading-none text-white`);
                break;
            case 'orange':
                setChipVarient(`${chipVarient} from-red-500 to-yellow-400 align-baseline font-bold uppercase leading-none text-white`);
                break;
            case 'gray':
                setChipVarient(`${chipVarient} from-gray-400 to-gray-100 align-baseline font-bold uppercase leading-none text-slate-500`);
                break;
            case 'dark':
                setChipVarient(`${chipVarient} from-gray-900 to-slate-800 align-baseline font-bold uppercase leading-none text-white`);
                break;
            default:
                setChipVarient(`${chipVarient} from-purple-700 to-pink-500 align-baseline font-bold uppercase leading-none text-white`);
        }
    }, [varient]);

    return (
        <div id={id}>
            <span className={`${chipVarient} ${className}`}> {children} </span>
        </div>
    );
};

Chip.propTypes = {
    /**
     * Specify a custom `id` for the `<Chip>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<Chip>`
     */
    className: PropTypes.string,

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Specify a custom `varient` for the `<Chip>`
     */
    varient: PropTypes.string
};

export default Chip;

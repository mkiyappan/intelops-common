import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/style/soft-ui-dashboard-tailwind.css';

const Progress = (props) => {
    const [progressVarient, setProgressVarient] = useState(
        'bg-gradient-to-tl transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white'
    );
    const { id, className, varient, children, progressPercentage } = props;

    const handleProgressVarient = () => {
        switch (varient) {
            case 'fuchsia':
                return setProgressVarient(progressVarient + 'w-8/12 from-purple-700 to-pink-500');
            case 'slate':
                return setProgressVarient(progressVarient + ' from-slate-600 to-slate-300');
            case 'cyan':
                return setProgressVarient(progressVarient + ' from-blue-600 to-cyan-400');
            case 'lime':
                return setProgressVarient(progressVarient + ' from-green-600 to-lime-400');
            case 'red':
                return setProgressVarient(progressVarient + ' from-red-600 to-rose-400');
            case 'orange':
                return setProgressVarient(progressVarient + ' from-red-500 to-yellow-400');
            default:
                return progressVarient;
        }
    };

    useEffect(() => {
        handleProgressVarient();
    }, []);

    return (
        <>
            <div
                id={id}
                className="grid place-items-center w-full min-h-[140px] bg-[#f8fafc] p-6 border border-blue-grey-50 rounded-lg scroll-mt-48 overflow-x-scroll lg:overflow-visible"
            >
                <div className={`${className} w-full mb-5`}>
                    <div className="flex mb-2">
                        <span className="mr-2 font-semibold leading-normal capitalize text-sm">{children}</span>
                        <span className="ml-auto font-semibold leading-normal text-sm">{progressPercentage}</span>
                    </div>
                    <div>
                        <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
                            <div className={progressVarient}></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="w-full">
                <div class="flex mb-2">
                    <span class="mr-2 font-semibold leading-normal capitalize text-sm">{children}</span>
                    <span class="ml-auto font-semibold leading-normal text-sm">{progressPercentage}</span>
                </div>
                <div>
                    <div class="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
                        <div class="bg-fuchsia-500 w-1/2 transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

Progress.propTypes = {
    /**
     * Specify a custom `id` for the `<Progress>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<Progress>`
     */
    className: PropTypes.string
};

export default Progress;

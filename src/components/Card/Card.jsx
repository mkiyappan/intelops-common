import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import '../../assets/style/soft-ui-dashboard-tailwind.css';

const Card = (props) => {
    const { id, imageURL, imageAlt, caption, title, titleHref, body, actionName, avatarList } = props;

    const renderAvatars = (avatarList) =>
        map(avatarList, (avatar) => (
            <a
                href={avatar.href}
                className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
            >
                <img className="w-full rounded-circle" alt={avatar.iamgeAlt} src={avatar.imageURL} />
            </a>
        ));

    return (
        <div id={id} className="w-full max-w-full mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="relative">
                    {imageURL && (
                        <a className="block shadow-xl rounded-2xl">
                            <img src={imageURL} alt={imageAlt} className="max-w-full shadow-soft-2xl rounded-2xl" />
                        </a>
                    )}
                </div>
                <div className="flex-auto px-1 pt-6">
                    {caption && (
                        <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                            {caption}
                        </p>
                    )}
                    {title && (
                        <a href={titleHref}>
                            <h5>{title}</h5>
                        </a>
                    )}
                    <p className="mb-6 leading-normal text-sm">{body}</p>
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                        >
                            {actionName}
                        </button>
                        <div class="mt-2">{renderAvatars(avatarList)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    /**
     * Specify a custom `id` for the `<Card>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<Card>`
     */
    className: PropTypes.string,

    /**
     * Specify a custom `imageURL` for the `<Card>`
     */
    imageURL: PropTypes.string,

    /**
     * Specify a custom `imageAlt` for the `<Card>`
     */
    imageAlt: PropTypes.string,

    /**
     * Specify a custom `actionName` for the `<Card>`
     */
    caption: PropTypes.string,

    /**
     * Specify a custom `title` for the `<Card>`
     */
    title: PropTypes.string,

    /**
     * Specify a custom `titleHref` for the `<Card>`
     */
    titleHref: PropTypes.string,

    /**
     * Specify a custom `body` for the `<Card>`
     */
    body: PropTypes.string,

    /**
     * Specify a custom `body` for the `<Card>`
     */
    body: PropTypes.string,

    /**
     * Specify a custom `body` for the `<Card>`
     */
    avatarList: PropTypes.array
};

export default Card;

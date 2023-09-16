import Image from 'next/image';
import React from 'react';

const Heading = ({ children, iconName = '', className = '', iconClass, img, imgClass }) => {
    const icon = (icon) => {
        switch (icon) {
            case 'trending':
                return '/trending.png';
            case 'trending-topic':
                return '/trending-topic.png';
            case 'about-us':
                return '/about-us.png';
            case 'review':
                return '/complain.png';
            case 'rating':
                return '/rating.png';
            case 'topic':
                return '/topic.png';
            case 'chat':
                return '/chat.png';
            case 'contact':
                return '/contact.png';
            default:
                return '';
        }
    };
    return (
        <div
            className={`msm:text-2xl text-xl border-b-2 pb-3 mb-5 font-semibold border-[#5F49F2] flex items-center gap-2 ${className}`}
        >
            <h1 className="text-gray-600">{children}</h1>
            {iconName && <Image src={icon(iconName)} className={`mb-1.5 ${iconClass}`} height={35} width={35} alt="" />}
            {img && <Image src={img} className={`mb-1.5 ${imgClass}`} height={35} width={35} alt="" />}
        </div>
    );
};

export default Heading;

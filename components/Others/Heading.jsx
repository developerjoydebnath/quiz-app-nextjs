import Image from 'next/image';
import React from 'react';

const Heading = ({ children, iconName = '', className = '', iconClass }) => {
    const img = (icon) => {
        switch (icon) {
            case 'trending':
                return '/trending.png';
            case 'about-us':
                return '/about-us.png';
            default:
                return '';
        }
    };
    return (
        <div
            className={`msm:text-2xl text-xl border-b-2 pb-3 mb-5 font-semibold border-[#5F49F2] flex items-center gap-2 ${className}`}
        >
            <h1 className="">{children}</h1>
            {iconName && <Image src={img(iconName)} className={`mb-1.5 ${iconClass}`} height={35} width={35} alt="" />}
        </div>
    );
};

export default Heading;

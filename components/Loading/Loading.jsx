import React from 'react';
import { Icon } from '../../Icons/Icon';

export default function Loading() {
    return (
        <div className="h-screen w-screen flex justify-center items-center gap-2">
            <Icon className="h-6 w-6 animate-spin-slow stroke-[#5F49F2]" icon="loading" />
            <h1 className="text-2xl font-semibold text-[#5F49F2]">Loading...</h1>
        </div>
    );
}

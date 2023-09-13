import React from 'react';

export default function PopularTopic({ topic }) {
    return (
        <div className="border px-2 py-4 rounded-lg bg-primary shadow-xl cursor-pointer hover:scale-105 transition-all">
            <div className="flex flex-col justify-center items-center">
                <div className="border h-40 w-40 rounded-full overflow-hidden bg-white">
                    <img src={topic?.img} alt="" />
                </div>
                <h3 className="mt-3 text-white">{topic?.title}</h3>
            </div>
        </div>
    );
}

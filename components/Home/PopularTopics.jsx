'use client';

import React from 'react';
import { popularTopics } from '../../FakeData/FakeData';
import PopularTopic from './PopularTopic';

export default function PopularTopics() {
    return (
        <section className="py-10 js__bg-img-2">
            <div className="max-w-7xl mx-auto p-10">
                <h1 className="text-2xl border-b-2 pb-3 mb-5 font-semibold border-[#5F49F2]">Popular Topics</h1>
                <div className="grid grid-cols-5 justify-center items-center gap-5">
                    {popularTopics.map((topic) => (
                        <PopularTopic key={topic.id} topic={topic} />
                    ))}
                </div>
            </div>
        </section>
    );
}

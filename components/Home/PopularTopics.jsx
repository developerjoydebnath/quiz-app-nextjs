'use client';

import React from 'react';
import { popularTopics } from '../../FakeData/FakeData';
import Heading from '../Others/Heading';
import PopularTopic from './PopularTopic';

export default function PopularTopics() {
    return (
        <section className="py-10 js__bg-img-2">
            <div className="mx-5">
                <div className="max-w-screen-xl md:mx-auto py-10">
                    <Heading iconName="trending">PopularTopics</Heading>
                    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xsm:grid-cols-2 justify-center items-center gap-5">
                        {popularTopics.map((topic) => (
                            <PopularTopic key={topic.id} topic={topic} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

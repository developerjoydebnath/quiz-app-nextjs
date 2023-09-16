'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { popularTopics } from '../../FakeData/FakeData';
import Heading from '../Others/Heading';
import PopularTopic from './PopularTopic';

export default function PopularTopics() {
    React.useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className="py-10 js__bg-img-2">
            <div className="mx-5">
                <div className="max-w-screen-xl md:mx-auto py-10">
                    <Heading iconName="trending">PopularTopics</Heading>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="max-w-screen-md mx-auto grid lg:grid-cols-5 md:grid-cols-4 msm:grid-cols-4 sm:grid-cols-3 xsm:grid-cols-4 justify-center items-center gap-5 sm:mt-10"
                    >
                        {popularTopics.map((topic) => (
                            <PopularTopic key={topic.id} topic={topic} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

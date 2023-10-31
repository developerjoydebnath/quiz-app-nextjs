import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { popularTopics } from '../../FakeData/FakeData';
import Heading from '../Others/Heading';

export default function AllTopics() {
    const screen = window.screen.width;

    React.useEffect(() => {
        AOS.init({ anchorPlacement: 'bottom-bottom', offset: -50, once: true });
    }, []);
    return (
        <section>
            <div className="mx-5 py-10">
                <div>
                    <Heading iconName="topic" iconClass="h-7 w-7">
                        All Topics
                    </Heading>

                    <div className="grid msm:grid-cols-2 grid-cols-1 msm:gap-y-10 gap-y-5 msm:gap-x-10 md:mt-8">
                        {popularTopics.map((topic) => (
                            <Link data-aos="fade-up" key={topic.id} href={`/topics/${topic.title.toLowerCase()}`}>
                                <div className="relative cursor-pointer" style={{ perspective: '500px' }}>
                                    <div
                                        className={`h-20 w-full bg-gradient-to-br from-pink-500 to-[#b10fa3] md:-ms-5 msm:-ms-3 rounded-md ${
                                            topic.id % 2 == 0 ? 'sm:-ms-6 xsm:-ms-3' : 'sm:ms-6 xsm:ms-3'
                                        } `}
                                        style={{
                                            boxShadow: '3px 3px 1px 2px #4E4E4E',
                                            transform: `rotateY(${
                                                screen < 700 ? (topic.id % 2 == 0 ? '-10deg' : '10deg') : '-10deg'
                                            })`,
                                        }}
                                    ></div>

                                    <div className="absolute z-20 top-0 left-0 flex justify-center items-center gap-3 h-full w-full">
                                        <Image src={topic.img} height={35} width={35} alt={topic.title} />
                                        <h3 className="text-lg font-bold text-white">{topic.title}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

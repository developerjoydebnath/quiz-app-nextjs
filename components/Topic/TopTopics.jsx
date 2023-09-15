import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { popularTopics } from '../../FakeData/FakeData';
import Heading from '../Others/Heading';

export default function TopTopics() {
    const screen = window.screen.width;
    return (
        <section>
            <div className="mx-5 py-10">
                <div>
                    <Heading iconName="trending" iconClass="h-8 w-8">
                        Top Topics
                    </Heading>
                    {/* <div className="grid grid-cols-2 gap-y-5 gap-x-10">
                        {popularTopics.slice(0, 6).map((topic) => (
                            <Link key={topic.id} href={`/topics/${topic.title.toLowerCase()}`}>
                                <div className="flex justify-center items-center py-5 gap-3 rounded-md shadow-lg bg-pink-400 border cursor-pointer hover:scale-105 transition-all">
                                    <Image src={topic.img} height={35} width={35} alt={topic.title} />
                                    <h3 className="text-lg font-bold text-black">{topic.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div> */}
                    <div className="grid msm:grid-cols-2 grid-cols-1 gap-y-5 msm:gap-x-10">
                        {popularTopics.slice(0, 6).map((topic) => (
                            <Link key={topic.id} href={`/topics/${topic.title.toLowerCase()}`}>
                                <div className="relative" style={{ perspective: '500px' }}>
                                    <div
                                        className={`h-20 w-full bg-pink-400 md:-ms-5 msm:-ms-3 rounded-md ${
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
                                        <h3 className="text-lg font-bold text-black">{topic.title}</h3>
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

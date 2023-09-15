import Link from 'next/link';
import React from 'react';
import { popularTopics } from '../../FakeData/FakeData';

export default function AllTopics() {
    return (
        <section>
            <div className="mx-5 py-10">
                <div>
                    <h1 className="border-b-2 border-[#5F49F2] mb-5 pb-3 text-2xl font-semibold">All Topics</h1>
                    <div className="grid grid-cols-2 gap-y-5 gap-x-10">
                        {popularTopics.map((topic) => (
                            <Link key={topic.id} href={`/topics/${topic.title.toLowerCase()}`}>
                                <div className="flex justify-center py-5 rounded-md shadow-lg bg-pink-400 cursor-pointer hover:scale-105 transition-all">
                                    <h3 className="text-lg font-medium text-white">{topic.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import Link from 'next/link';
import React from 'react';

export default function TopTopics() {
    return (
        <section>
            <div className="mx-5 py-10">
                <div>
                    <h1 className="border-b-2 border-[#5F49F2] mb-5 pb-3 text-2xl font-semibold">Top Topics</h1>
                    <div className="grid grid-cols-2 gap-y-5 gap-x-10">
                        <Link href="/quizList">
                            <div className="flex justify-center py-5 rounded-md shadow-lg bg-pink-400 cursor-pointer hover:scale-105 transition-all">
                                <h3 className="text-lg font-medium text-white">Science</h3>
                            </div>
                        </Link>
                        <div className="flex justify-center py-5 rounded-md shadow-lg bg-pink-400 cursor-pointer hover:scale-105 transition-all">
                            <h3 className="text-lg font-medium text-white">Science</h3>
                        </div>
                        <div className="flex justify-center py-5 rounded-md shadow-lg bg-pink-400 cursor-pointer hover:scale-105 transition-all">
                            <h3 className="text-lg font-medium text-white">Science</h3>
                        </div>
                        <div className="flex justify-center py-5 rounded-md shadow-lg bg-pink-400 cursor-pointer hover:scale-105 transition-all">
                            <h3 className="text-lg font-medium text-white">Science</h3>
                        </div>
                        <div className="flex justify-center py-5 rounded-md shadow-lg bg-pink-400 cursor-pointer hover:scale-105 transition-all">
                            <h3 className="text-lg font-medium text-white">Science</h3>
                        </div>
                        <div className="flex justify-center py-5 rounded-md shadow-lg bg-pink-400 cursor-pointer hover:scale-105 transition-all">
                            <h3 className="text-lg font-medium text-white">Science</h3>
                        </div>
                        <div className="flex justify-center py-5 rounded-md shadow-lg bg-pink-400 cursor-pointer hover:scale-105 transition-all">
                            <h3 className="text-lg font-medium text-white">Science</h3>
                        </div>
                        <div className="flex justify-center py-5 rounded-md shadow-lg bg-pink-400 cursor-pointer hover:scale-105 transition-all">
                            <h3 className="text-lg font-medium text-white">Science</h3>
                        </div>
                        <div className="flex justify-center py-5 rounded-md shadow-lg bg-pink-400 cursor-pointer hover:scale-105 transition-all">
                            <h3 className="text-lg font-medium text-white">Science</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

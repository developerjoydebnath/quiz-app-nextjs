'use client';

import Link from 'next/link';
import React from 'react';
import { quizData } from '../../FakeData/QuizData';

export default function TestLists() {
    return (
        <section>
            <div>
                <h1>Questions for ------------- topic</h1>
                <div>
                    {quizData.map((data) => (
                        <Link
                            href={`/quizList/${data?.id}`}
                            key={data.id}
                            className="border my-5 py-2 px-3 rounded-md bg-[#3ce7e7] flex justify-between items-center cursor-pointer"
                        >
                            <h1 className="text-xl font-medium"># Test No : {data?.id}</h1>
                            <h5>Total Q. {data?.quizes?.length}</h5>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

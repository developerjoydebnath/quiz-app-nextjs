'use client';

import Link from 'next/link';
import React from 'react';
import { quizData } from '../../FakeData/QuizData';

export default function TestLists({ topicName }) {
    const [dataOfQuiz, setDataOfQuiz] = React.useState([]);
    const data = quizData.find((d) => d.topic.toLowerCase() === topicName?.topicName);

    React.useEffect(() => {
        if (data) {
            setDataOfQuiz(data.data);
        }
    }, []);

    return (
        <section>
            <div>
                <h1 className="border-b-2 border-[#5F49F2] mb-5 pb-3 mt-5 text-2xl font-semibold">
                    {data?.topic} Quiz
                </h1>
                <div>
                    {dataOfQuiz.length > 0 ? (
                        dataOfQuiz.map((data) => (
                            <Link
                                href={`/topics/${topicName?.topicName}/${data?.id}`}
                                key={data.id}
                                className="border my-5 py-2 px-3 rounded-md bg-[#3ce7e7] flex justify-between items-center cursor-pointer"
                            >
                                <h1 className="text-xl font-medium"># Test No : {data?.id}</h1>
                                <h5>Total Q. {data?.quizes?.length}</h5>
                            </Link>
                        ))
                    ) : (
                        <div className="text-center my-20">
                            <h1 className="text-5xl">No Quiz Found</h1>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

'use client';
import Link from 'next/link';
import React from 'react';
import { quizData } from '../../../../../../FakeData/QuizData';
import Heading from '../../../../../../components/Others/Heading';

const page = ({ params }) => {
    const findQuiz = quizData.find((q) => q.topic.toLowerCase() === params.topicName);

    const quiz = findQuiz && findQuiz.data.find((q) => q.id === Number(params.quizId));

    console.log(quiz);

    return (
        <div>
            <div className="mx-5">
                <div className="max-w-screen-lg mx-auto">
                    <Heading className="mt-5" img="/results.png" imgClass="msm:h-7 msm:w-7 w-6 h-6">
                        Quiz Result
                    </Heading>
                    <div>
                        {quiz?.quizes &&
                            quiz.quizes.map((q) => (
                                <div key={q.id} className="msm:mb-8 mb-5">
                                    <div>
                                        <div className="flex justify-between">
                                            <h1 className="md:text-xl sm:text-lg text-base">
                                                Question {q.id}: {q.question}
                                            </h1>
                                        </div>
                                        <div className="grid msm:grid-cols-2 grid-cols-1 msm:gap-x-10 gap-y-5 msm:mt-3 mt-2">
                                            {q.options.map((option, idx) => (
                                                <div
                                                    id={`q-${q?.id}-op${option.id}`}
                                                    className={`px-5 py-3 rounded-md cursor-pointer ${
                                                        q.correctAnswer === option.id ? 'bg-green-500' : 'bg-gray-200'
                                                    }`}
                                                    key={option.id}
                                                >
                                                    <h4 className="sm:text-base text-sm">
                                                        {['A', 'B', 'C', 'D'][idx]}. {option.option}
                                                    </h4>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="my-10 msm:text-end text-center">
                        <Link
                            href={`/topics/${params.topicName}`}
                            className="py-3 msm:py-3.5 px-5 rounded-md bg-gradient-to-br from-[#5F49F2] to-[#7f6df5] text-white msm:font-medium font-normal"
                        >
                            Try Another One
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;

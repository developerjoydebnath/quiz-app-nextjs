'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import React from 'react';
import { popularTopics } from '../../FakeData/FakeData';
import { quizData } from '../../FakeData/QuizData';
import { Icon } from '../../Icons/Icon';
import Heading from '../Others/Heading';
AOS.init({ anchorPlacement: 'bottom-bottom', offset: -50 });

export default function TestLists({ topicName }) {
    const [dataOfQuiz, setDataOfQuiz] = React.useState([]);
    const data = quizData.find((d) => d.topic.toLowerCase() === topicName?.topicName);
    const selectedTopic = popularTopics.find((d) => d.title.toLowerCase() === topicName.topicName.toLowerCase());
    const complete = true;

    React.useEffect(() => {
        if (data) {
            setDataOfQuiz(data.data);
        }
    }, []);

    return (
        <section>
            <div>
                <Heading
                    className="mt-8"
                    img={selectedTopic && selectedTopic.img}
                    imgClass="msm:h-8 msm:w-8 h-6 w-6 mb-1"
                >
                    {data?.topic} Quiz
                </Heading>
                <div>
                    <Link
                        data-aos="fade-left"
                        href={`/topics/${topicName?.topicName}/${data?.id}`}
                        key={data.id}
                        className={`my-5 md:py-5 py-3 md:px-5 px-3 rounded-md flex justify-between items-center cursor-pointer bg-gradient-to-br from-[#32e3fa] to-[#75ffe1] shadow-md`} // bg-[${randomColor()}]
                    >
                        <span className="flex items-center gap-2">
                            <h1 className="msm:text-xl sm:text-lg text-base font-medium">Test No : {data?.id}</h1>
                            {complete && (
                                <Icon icon="done" className="msm:h-5 msm:w-5 sm:h-5 sm:w-5 h-4 w-4 fill-black" />
                            )}
                        </span>

                        <p className="text-black msm:text-base text-sm">Total Q. 11</p>

                        <span className="text-start">
                            <p className="sm:text-sm text-xs">Correct: 5</p>
                            <p className="sm:text-sm text-xs">Mark: 25/50</p>
                        </span>
                    </Link>

                    {dataOfQuiz.length > 0 ? (
                        dataOfQuiz.map((data) => (
                            <div key={data.id} data-aos="fade-left">
                                <Link
                                    href={`/topics/${topicName?.topicName}/${data?.id}`}
                                    className={`my-5 md:py-5 py-3 md:px-5 px-3 rounded-md flex justify-between items-center cursor-pointer bg-gradient-to-br from-[#32e3fa] to-[#75ffe1] shadow-md`} // bg-[${randomColor()}]
                                >
                                    <span className="flex items-center gap-2">
                                        <h1 className="msm:text-xl sm:text-lg text-base font-medium">
                                            Test No : {data?.id}
                                        </h1>
                                        {complete && (
                                            <Icon
                                                icon="done"
                                                className="msm:h-5 msm:w-5 sm:h-5 sm:w-5 h-4 w-4 fill-black"
                                            />
                                        )}
                                    </span>
                                    <div className="flex items-center gap-5">
                                        {/* {complete && <Icon icon="done" className="h-5 w-5 fill-white" />} */}
                                        <h5 className="text-black msm:text-base text-sm">
                                            Total Q. {data?.quizes?.length}
                                        </h5>
                                    </div>
                                    <p className="sm:text-sm text-xs">Incomplete</p>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div className="text-center my-20 bg-[#38ffcd]">
                            <h1 className="text-5xl">No Quiz Found</h1>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

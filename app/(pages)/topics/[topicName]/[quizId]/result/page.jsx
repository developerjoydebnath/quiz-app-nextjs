'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import { quizData } from '../../../../../../FakeData/QuizData';
import { Icon } from '../../../../../../Icons/Icon';
import Heading from '../../../../../../components/Others/Heading';

const page = ({ params }) => {
    const results = useSelector((state) => state.quizResult);
    const [answered, setAnswered] = React.useState([]);
    const router = useRouter();

    const findQuiz = quizData.find((q) => q.topic.toLowerCase() === params.topicName);

    const quiz = findQuiz && findQuiz.data.find((q) => q.id === Number(params.quizId));

    React.useEffect(() => {
        if (results.completed.length > 0) {
            const isTopic = results.completed.find(
                (result) => result.topic.toLowerCase() === params.topicName.toLowerCase(),
            );
            if (isTopic) {
                const matchedQuiz = isTopic.quiz.find((q) => q.quizNo === Number(params.quizId));

                if (matchedQuiz) {
                    setAnswered(matchedQuiz.answered);
                }
            }
        } else {
            router.push(`/topics/${params.topicName}`);
        }
    }, []);

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
                                                    className={`rounded-md cursor-pointer ${
                                                        q.correctAnswer === option.id ? 'bg-green-500' : 'bg-gray-200'
                                                    }`}
                                                    key={option.id}
                                                >
                                                    <div
                                                        className={`px-5 py-3 rounded-md flex justify-between items-center ${
                                                            option.id === q.correctAnswer
                                                                ? 'bg-green-500'
                                                                : answered &&
                                                                  answered.find(
                                                                      (ans) => ans.q === q.id && option.id === ans.sop,
                                                                  )
                                                                ? 'bg-red-400'
                                                                : ''
                                                        }`}
                                                    >
                                                        <h4 className="sm:text-base text-sm">
                                                            {['A', 'B', 'C', 'D'][idx]}. {option.option}
                                                        </h4>
                                                        <Icon
                                                            icon={`${
                                                                option.id === q.correctAnswer &&
                                                                answered &&
                                                                answered.find(
                                                                    (ans) =>
                                                                        ans.q === q.id && q.correctAnswer === ans.sop,
                                                                )
                                                                    ? 'done'
                                                                    : answered &&
                                                                      answered.find(
                                                                          (ans) =>
                                                                              ans.q === q.id && option.id === ans.sop,
                                                                      )
                                                                    ? 'cross'
                                                                    : ''
                                                            }`}
                                                            className="h-4 w-4"
                                                        />
                                                    </div>
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

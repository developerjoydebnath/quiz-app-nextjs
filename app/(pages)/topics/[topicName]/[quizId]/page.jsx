'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as React from 'react';
import { quizData } from '../../../../../FakeData/QuizData';
import Loading from '../../../../../components/Loading/Loading';

const Quiz = ({ params }) => {
    const [questionNo, setQuestionNo] = React.useState(1);
    const [selected, setSelected] = React.useState([]);
    const [correctAnswer, setCorrectAnswer] = React.useState(0);
    const [isShown, setIsShown] = React.useState(false);
    const [quizes, setQuizes] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const findQuiz = quizData.find((q) => q.topic.toLowerCase() === params.topicName);

    const quiz = findQuiz && findQuiz.data.find((q) => q.id === Number(params.quizId));

    React.useEffect(() => {
        AOS.init();
    }, []);

    React.useEffect(() => {
        if (findQuiz && quiz) {
            setQuizes(quiz);
        }
        setLoading(false);
    }, []);

    // handle previous button
    const handlePreviousBtn = () => {
        if (questionNo > 1) {
            setQuestionNo(questionNo - 1);
        }
    };

    // handle next button
    const handleNextBtn = () => {
        if (questionNo < quiz?.quizes.length) {
            setQuestionNo(questionNo + 1);
        }
    };

    // get the percentage of progress
    const progress = ((questionNo - 1) / (quizes?.quizes?.length - 1)) * 100 + '%';

    //  handel items selected
    const handleSelect = (e, questionId, optionId) => {
        const choice = { q: questionId, sop: optionId };

        if (questionId) {
            const index = selected.findIndex((obj) => obj.q === questionId);

            if (index !== -1) {
                selected.splice(index, 1);
                setSelected([...selected, choice]);
            } else {
                console.log('hello');
                setSelected([...selected, choice]);
            }
        }
    };

    // handle submit button and handling the correct answers ===
    const handleSubmit = () => {
        // initial value of correct answers
        let correct = 0;

        // check the correct answers
        quizes?.quizes?.map((q) =>
            selected.map((s) => (s.sop === q.correctAnswer && s.q === q.id ? (correct += 1) : correct)),
        );

        setCorrectAnswer(correct);
        setSelected([]);
        setQuestionNo(1);
        setIsShown(true);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="mx-5">
                <div
                    data-aos="zoom-out"
                    data-aos-delay="100"
                    className="max-w-screen-lg mx-auto border-2 border-[#5F49F2]/30 my-10 py-5 rounded-lg"
                >
                    <div className="mt-10 mx-5 flex gap-5 items-center">
                        <div className="h-3 w-full border rounded-full">
                            <div
                                style={{ height: '100%', width: progress }}
                                className="bg-[#5F49F2] rounded-full transition-all"
                            ></div>
                        </div>
                        <div>
                            {questionNo}/{quizes?.quizes?.length}
                        </div>
                    </div>
                    <div className="mx-5 py-10">
                        {quizes?.quizes?.length > 0 ? (
                            quizes?.quizes?.map((q, idx) => (
                                <React.Fragment key={q.id}>
                                    {q.id === questionNo ? (
                                        <div className="">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h1 className="md:text-xl sm:text-lg text-base">
                                                        Question {q.id}: {q.question}
                                                    </h1>
                                                </div>
                                                <div className="grid msm:grid-cols-2 grid-cols-1 msm:gap-x-10 gap-y-5 mt-5">
                                                    {q.options.map((option) => (
                                                        <div
                                                            id={`q-${q?.id}-op${option.id}`}
                                                            onClick={(e) => handleSelect(e, q.id, option.id)}
                                                            className={`px-5 py-3 rounded-md cursor-pointer ${
                                                                selected.find(
                                                                    (i) => i.q === q.id && i.sop === option.id,
                                                                ) // find the selected option and style it
                                                                    ? 'bg-[#fde80e]'
                                                                    : 'bg-gray-200'
                                                            }`}
                                                            key={option.id}
                                                        >
                                                            <h4 className="sm:text-base text-sm">{option.option}</h4>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="flex items-center justify-between mt-10">
                                                    <h1 className="md:text-xl sm:text-lg text-base">
                                                        Correct: {isShown ? correctAnswer : 'N/A'}
                                                    </h1>
                                                    <div className="text-end">
                                                        <button
                                                            disabled={idx < 1}
                                                            className="disabled:bg-[#6f5bf3]/40 disabled:cursor-not-allowed bg-[#6f5bf3] hover:bg-[#5F49F2] msm:px-5 px-4 msm:py-2 py-2 text-white msm:text-lg text-base font-medium rounded-md"
                                                            onClick={handlePreviousBtn}
                                                        >
                                                            Previous
                                                        </button>
                                                        <button
                                                            disabled={
                                                                selected?.length === idx ||
                                                                idx + 1 === quiz?.quizes?.length
                                                            }
                                                            className="disabled:bg-[#6f5bf3]/40 disabled:cursor-not-allowed bg-[#6f5bf3] hover:bg-[#5F49F2] msm:px-5 px-4 msm:py-2 py-2 text-white msm:text-lg text-base font-medium rounded-md ms-5"
                                                            onClick={handleNextBtn}
                                                        >
                                                            Next
                                                        </button>
                                                        {idx + 1 === quiz?.quizes?.length && (
                                                            <button
                                                                onClick={handleSubmit}
                                                                disabled={selected?.length !== quiz?.quizes.length}
                                                                className="disabled:bg-[#6f5bf3]/40 disabled:cursor-not-allowed bg-[#6f5bf3] hover:bg-[#5F49F2] msm:px-5 px-4 msm:py-2 py-2 text-white msm:text-lg text-base font-medium rounded-md ms-5 sm:mt-0 mt-5"
                                                            >
                                                                Submit
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                </React.Fragment>
                            ))
                        ) : (
                            <div className="my-20 text-center">
                                <h1 className="text-5xl">No Quiz Found!</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;

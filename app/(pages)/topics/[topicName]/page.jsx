'use client';

import TestLists from '../../../../components/Quiz/TestLists';

export default function QuizList({ params }) {
    const topicName = params;
    return (
        <div>
            <div className="max-w-screen-lg mx-auto">
                <div className="mx-5">
                    <TestLists topicName={topicName} />
                </div>
            </div>
        </div>
    );
}

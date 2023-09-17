import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    completed: [],
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        submitQuiz: (state, action) => {
            // if (state.completed.length > 0) {
            // const topicMatched = state.completed.filter((c) => c.topic === action.payload.topic);
            // console.log(topicMatched);

            // } else {

            const idx = state.completed.findIndex((c) => c?.topic === action.payload.topic) || 0;

            console.log(idx);

            if (idx === -1) {
                state.completed.push({
                    topic: action.payload.topic,
                    quiz: [
                        {
                            correct: action.payload.correct,
                            incorrect: action.payload.incorrect,
                            totalMark: action.payload.totalMark,
                            obtainedMark: action.payload.obtainedMark,
                            quizNo: action.payload.quizNo,
                        },
                    ],
                });
            } else {
                state.completed[idx].quiz.push({
                    correct: action.payload.correct,
                    incorrect: action.payload.incorrect,
                    totalMark: action.payload.totalMark,
                    obtainedMark: action.payload.obtainedMark,
                    quizNo: action.payload.quizNo,
                });
            }

            // }
        },
    },
});

export default quizSlice.reducer;
export const { submitQuiz } = quizSlice.actions;

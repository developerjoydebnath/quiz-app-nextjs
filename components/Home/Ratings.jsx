'use client';

import React from 'react';
import { ratingsData } from '../../FakeData/RatingsData';

export default function Ratings() {
    const [oneStars, setOneStars] = React.useState(0);
    const [twoStars, setTwoStars] = React.useState(0);
    const [threeStars, setThreeStars] = React.useState(0);
    const [fourStars, setFourStars] = React.useState(0);
    const [fiveStars, setFiveStars] = React.useState(0);

    const totalRatings = oneStars + twoStars + threeStars + fourStars + fiveStars;

    const totalStars = ratingsData.reduce((total, current) => total + current.stars, 0);
    const ratings = (totalStars / ratingsData?.length).toFixed(1);

    const newArray = [
        { stars: 5, value: fiveStars, percent: Math.floor((fiveStars / totalRatings) * 100) || 0 },
        { stars: 4, value: fourStars, percent: Math.floor((fourStars / totalRatings) * 100) || 0 },
        { stars: 3, value: threeStars, percent: Math.floor((threeStars / totalRatings) * 100) || 0 },
        { stars: 2, value: twoStars, percent: Math.floor((twoStars / totalRatings) * 100) || 0 },
        { stars: 1, value: oneStars, percent: Math.floor((oneStars / totalRatings) * 100) || 0 },
    ];

    React.useEffect(() => {
        ratingsData.map((data) => {
            if (data.stars === 1) {
                setOneStars((prev) => prev + 1);
            } else if (data.stars === 2) {
                setTwoStars((prev) => prev + 1);
            } else if (data.stars === 3) {
                setThreeStars((prev) => prev + 1);
            } else if (data.stars === 4) {
                setFourStars((prev) => prev + 1);
            } else if (data.stars === 5) {
                setFiveStars((prev) => prev + 1);
            }
        });
    }, []);

    return (
        <section>
            <div className="mx-5">
                <div className="max-w-screen-xl mx-auto py-10">
                    <div>
                        <h1 className="border-b-2 border-[#5F49F2] pb-5 mb-10 text-2xl font-semibold">Ratings</h1>
                        <div className="sm:flex gap-5 ms-1">
                            <div className="text-start mb-5 sm:mb-0">
                                <div>
                                    <span className="text-5xl">{ratings}</span>
                                    <span className="text-2xl">/5</span>
                                </div>
                                <div className="flex my-2">
                                    <span>*</span>
                                    <span>*</span>
                                    <span>*</span>
                                    <span>*</span>
                                    <span>*</span>
                                </div>
                                <div>
                                    <p className="text-sm">{ratingsData?.length} Ratings</p>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                    {newArray.map((data, index) => (
                                        <div key={index} className="flex gap-2 justify-between items-center">
                                            <div>{data?.stars} Stars</div>
                                            <div className="w-44 h-2 bg-[#5F49F2]  rounded-full">
                                                <div
                                                    style={{ width: `${data?.percent}%` }}
                                                    className={`h-full  bg-[#fde80e] rounded-full`}
                                                ></div>
                                            </div>
                                            <div>{data?.percent}%</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

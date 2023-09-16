import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function PopularTopic({ topic }) {
    return (
        <div className="flex justify-center items-center">
            <Link href={`/topics/${topic.title.toLowerCase()}`} className="w-fit bg-white shadow-md rounded">
                <div className="">
                    <div className="flex flex-col justify-center items-center sm:w-28 sm:h-28 h-[75px] w-[75px]">
                        <div className=" bg-white">
                            <Image
                                height={60}
                                width={60}
                                className="sm:w-14 sm:h-14 h-10 w-10 mt-0.5"
                                src={topic?.img}
                                alt=""
                            />
                        </div>
                        <h3 className="sm:mt-3 mt-0.5 sm:text-base text-xs text-gray-500">{topic?.title}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
}

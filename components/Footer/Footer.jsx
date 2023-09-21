import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Icon } from '../../Icons/Icon';

export default function Footer() {
    return (
        <footer>
            <div className="bg-[#272727]">
                <div className="max-w-screen-xl mx-auto py-5">
                    <div className="grid grid-cols-12 mx-5">
                        <div className="md:col-span-4 hidden md:flex flex-col gap-2 items-center justify-start">
                            <Image src="/bee.webp" width={60} height={60} alt="logo" />

                            <div>
                                <h1 className="text-[#5F49F2] font-bold text-4xl">
                                    Quiz<span className="text-[#fde80e]">Bee</span>
                                </h1>
                            </div>
                        </div>
                        <div className="md:col-span-4 sm:col-span-6 col-span-12">
                            <div>
                                <h3 className="text-white text-lg font-bold">LEGAL</h3>
                                <div className="">
                                    <p>
                                        <Link
                                            className="hover:underline text-gray-100 underline-offset-2 my-1 text-sm"
                                            href=""
                                        >
                                            Terms & conditions
                                        </Link>
                                    </p>
                                    <p>
                                        <Link
                                            className="hover:underline text-gray-100 underline-offset-2 my-1 text-sm"
                                            href=""
                                        >
                                            Privacy policy
                                        </Link>
                                    </p>
                                    <p>
                                        <Link
                                            className="hover:underline text-gray-100 underline-offset-2 my-1 text-sm"
                                            href=""
                                        >
                                            Copyright information
                                        </Link>
                                    </p>
                                    <p>
                                        <Link
                                            className="hover:underline text-gray-100 underline-offset-2 my-1 text-sm"
                                            href=""
                                        >
                                            Cookies policy
                                        </Link>
                                    </p>
                                    <p>
                                        <Link
                                            className="hover:underline text-gray-100 underline-offset-2 my-1 text-sm"
                                            href=""
                                        >
                                            FAQ
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-4 sm:col-span-6 col-span-12 sm:mt-0 mt-5">
                            <div>
                                <h4 className="text-white text-lg font-bold">SOCIAL MEDIA</h4>
                                <div className="flex gap-2 mt-2">
                                    <Link href="/">
                                        <Icon
                                            icon="facebook"
                                            className="h-9 w-9 p-1.5 fill-white bg-blue-600 rounded"
                                        />
                                    </Link>
                                    <Link href="/">
                                        <Icon
                                            icon="instagram"
                                            className="h-9 w-9 p-1.5 fill-white bg-gradient-to-tr from-yellow-600 via-red-600 to-purple-500 rounded"
                                        />
                                    </Link>
                                    <Link href="/">
                                        <Icon icon="twitter" className="h-9 w-9 p-1.5 fill-white bg-sky-500 rounded" />
                                    </Link>
                                    <Link href="/">
                                        <Icon
                                            icon="whatsapp"
                                            className="h-9 w-9 p-1.5 fill-white bg-green-600 rounded"
                                        />
                                    </Link>
                                    <Link href="/">
                                        <Icon icon="youtube" className="h-9 w-9 p-1.5 fill-white bg-red-700 rounded" />
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-3 text-sm text-gray-300 py-3">
                                <h4>Copyright © 2010-2023 QuizBee. All rights reserved.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

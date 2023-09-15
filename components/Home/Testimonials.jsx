import Image from 'next/image';
import React from 'react';
import Heading from '../Others/Heading';

export default function Testimonials() {
    return (
        <section className="js__bg-img-3">
            <div className="mx-5">
                <div className="max-w-screen-xl mx-auto">
                    <Heading className="" iconClass="h-7 w-7" iconName="about-us">
                        About Us
                    </Heading>

                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5 md:mx-0 mx-auto">
                        <div className="flex md:justify-end justify-center max-h-fit h-fit">
                            <div className="max-w-xl msm:p-10 p-7 max-h-full bg-[#ffffff] rounded-lg drop-shadow-lg">
                                <h3 className="lg:text-3xl md:text-xl sm:text-2xl xsm:text-xl font-semibold mb-3">
                                    Check your skill
                                </h3>
                                <p className="lg:text-lg sm:text-base text-sm text-[#6e6e6e]">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur id numquam
                                    temporibus porro ut! Placeat atque voluptates quo voluptate earum, saepe eum eos,
                                    tempore consequuntur unde fugiat suscipit modi rerum nam perspiciatis similique
                                    possimus exercitationem maxime aliquid nostrum esse laboriosam. Ipsum cum ut,
                                    explicabo eum enim accusantium quas debitis corporis.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Image width={400} height={400} src="/logo.webp" className="" alt="" />
                        </div>
                    </div>

                    <div className="flex justify-center py-5">
                        <img className="w-[500px]" src="/line1.svg" alt="" />
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5 md:mx-0 mx-auto">
                        <div className="flex justify-center md:order-1 order-2">
                            <Image width={400} height={400} src="/logo.webp" className="" alt="" />
                        </div>
                        <div className="flex md:justify-end justify-center max-h-fit h-fit md:order-2 order-1">
                            <div className="max-w-xl msm:p-10 p-7 max-h-full bg-[#ffffff] rounded-lg drop-shadow-lg">
                                <h3 className="lg:text-3xl md:text-xl sm:text-2xl xsm:text-xl font-semibold mb-3">
                                    Check your skill
                                </h3>
                                <p className="lg:text-lg sm:text-base text-sm text-[#6e6e6e]">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur id numquam
                                    temporibus porro ut! Placeat atque voluptates quo voluptate earum, saepe eum eos,
                                    tempore consequuntur unde fugiat suscipit modi rerum nam perspiciatis similique
                                    possimus exercitationem maxime aliquid nostrum esse laboriosam. Ipsum cum ut,
                                    explicabo eum enim accusantium quas debitis corporis.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center py-5">
                        <img className="w-[500px]" src="/line2.svg" alt="" />
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5 md:mx-0 mx-auto">
                        <div className="flex md:justify-end justify-center max-h-fit h-fit">
                            <div className="max-w-xl msm:p-10 p-7 max-h-full bg-[#ffffff] rounded-lg drop-shadow-lg">
                                <h3 className="lg:text-3xl md:text-xl sm:text-2xl xsm:text-xl font-semibold mb-3">
                                    Check your skill
                                </h3>
                                <p className="lg:text-lg sm:text-base text-sm text-[#6e6e6e]">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur id numquam
                                    temporibus porro ut! Placeat atque voluptates quo voluptate earum, saepe eum eos,
                                    tempore consequuntur unde fugiat suscipit modi rerum nam perspiciatis similique
                                    possimus exercitationem maxime aliquid nostrum esse laboriosam. Ipsum cum ut,
                                    explicabo eum enim accusantium quas debitis corporis.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Image width={400} height={400} src="/logo.webp" className="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

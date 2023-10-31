import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import React from 'react';
import Heading from '../Others/Heading';

export default function Testimonials() {
    React.useEffect(() => {
        AOS.init({ anchorPlacement: 'bottom-bottom', offset: -100, once: true });
    }, []);
    return (
        <section className="js__bg-img-3 mt-5">
            <div className="mx-5">
                <div className="max-w-screen-xl mx-auto">
                    <Heading className="" iconClass="h-7 w-7" iconName="about-us">
                        About Us
                    </Heading>

                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5 md:mx-0 mx-auto">
                        <div className="flex md:justify-end justify-center max-h-fit h-fit md:order-1 order-2 overflow-hidden">
                            <div
                                data-aos="slide-right"
                                data-aos-easing="ease-out"
                                className="max-w-xl msm:p-10 p-7 max-h-full rounded-lg drop-shadow-lg"
                            >
                                <h3 className="lg:text-3xl md:text-xl sm:text-2xl xsm:text-xl font-semibold mb-3 text-[#5F49F2]">
                                    Check your skill
                                </h3>
                                <p className="lg:text-lg sm:text-base text-sm text-gray-600">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur id numquam
                                    temporibus porro ut! Placeat atque voluptates quo voluptate earum, saepe eum eos,
                                    tempore consequuntur unde fugiat suscipit modi rerum nam perspiciatis similique
                                    possimus exercitationem maxime aliquid nostrum esse laboriosam. Ipsum cum ut,
                                    explicabo eum enim accusantium quas debitis corporis.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center md:order-2 order-1 overflow-hidden">
                            <Image
                                data-aos="slide-left"
                                data-aos-easing="ease-out"
                                width={400}
                                height={400}
                                src="/on-time.png"
                                className="lg:h-[400px] lg:w-[400px] md:h-[350px] md:w-[350px] msm:h-[375px] msm:w-[375px] sm:h-[300px] sm:w-[300px] h-[260px] w-[260px]"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="flex justify-center py-5">
                        <img className="msm:w-[500px] sm:w-[370px] w-[300px]" src="/line1.svg" alt="" />
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5 md:mx-0 mx-auto">
                        <div className="flex justify-center overflow-hidden">
                            <Image
                                data-aos="slide-right"
                                data-aos-easing="ease-out"
                                width={400}
                                height={400}
                                src="/deadline.png"
                                className="lg:h-[400px] lg:w-[400px] md:h-[350px] md:w-[350px] msm:h-[375px] msm:w-[375px] sm:h-[300px] sm:w-[300px] h-[260px] w-[260px]"
                                alt=""
                            />
                        </div>
                        <div className="flex md:justify-end justify-center max-h-fit h-fit overflow-hidden">
                            <div
                                data-aos="slide-left"
                                data-aos-easing="ease-out"
                                className="max-w-xl msm:p-10 p-7 max-h-full rounded-lg drop-shadow-lg"
                            >
                                <h3 className="lg:text-3xl md:text-xl sm:text-2xl xsm:text-xl font-semibold mb-3 text-[#5F49F2]">
                                    Check your skill
                                </h3>
                                <p className="lg:text-lg sm:text-base text-sm text-gray-600">
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
                        <img className="msm:w-[500px] sm:w-[370px] w-[300px]" src="/line2.svg" alt="" />
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5 md:mx-0 mx-auto">
                        <div className="flex md:justify-end justify-center max-h-fit h-fit md:order-1 order-2 overflow-hidden">
                            <div
                                data-aos="slide-right"
                                data-aos-easing="ease-out"
                                className="max-w-xl msm:p-10 p-7 max-h-full rounded-lg drop-shadow-lg"
                            >
                                <h3 className="lg:text-3xl md:text-xl sm:text-2xl xsm:text-xl font-semibold mb-3 text-[#5F49F2]">
                                    Check your skill
                                </h3>
                                <p className="lg:text-lg sm:text-base text-sm text-gray-600">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur id numquam
                                    temporibus porro ut! Placeat atque voluptates quo voluptate earum, saepe eum eos,
                                    tempore consequuntur unde fugiat suscipit modi rerum nam perspiciatis similique
                                    possimus exercitationem maxime aliquid nostrum esse laboriosam. Ipsum cum ut,
                                    explicabo eum enim accusantium quas debitis corporis.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center md:order-2 order-1 overflow-hidden">
                            <Image
                                data-aos="slide-left"
                                data-aos-easing="ease-out"
                                width={400}
                                height={400}
                                src="/celebration.png"
                                className="lg:h-[400px] lg:w-[400px] md:h-[350px] md:w-[350px] msm:h-[375px] msm:w-[375px] sm:h-[300px] sm:w-[300px] h-[260px] w-[260px]"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

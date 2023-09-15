import Image from 'next/image';
import React from 'react';
import Heading from '../Others/Heading';

const ContactUs = () => {
    return (
        <section id="contact_us">
            <div className="mx-5">
                <div className="max-w-screen-xl mx-auto my-10">
                    <div>
                        <Heading iconName="contact" iconClass="h-9 w-9">
                            Contact Us
                        </Heading>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
                            <div className="flex justify-center items-center md:border-r-2">
                                <div className="w-[400px] max-w-full me-3">
                                    <div>
                                        <h1 className="sm:text-2xl text-xl font-bold text-gray-600">
                                            Get In Touch With Us
                                        </h1>
                                        <p className="text-sm text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum libero
                                            provident saepe perferendis repudiandae, ullam officiis a nostrum doloribus
                                            quod.
                                        </p>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <div className="me-2 sm:w-20 w-16 sm:h-20 h-16 max-h-full max-w-full p-2 flex justify-center items-center rounded">
                                            <Image
                                                className="sm:h-14 h-12 w-12 sm:w-14"
                                                src="/location.png"
                                                height={60}
                                                width={60}
                                                alt="img"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="sm:text-lg font-semibold text-slate-500">Our Location</h3>
                                            <p className="text-slate-500 sm:text-base text-sm">
                                                120 Bogabari Road, Dhaka - 1100
                                            </p>
                                            <p className="text-slate-500 sm:text-base text-sm">Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <div className="me-2 sm:w-20 w-16 sm:h-20 h-16 max-h-full max-w-full p-2 flex justify-center items-center rounded">
                                            <Image
                                                className="sm:h-14 h-12 w-12 sm:w-14"
                                                src="/message.png"
                                                height={60}
                                                width={60}
                                                alt="img"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="sm:text-lg font-semibold text-slate-500">
                                                Our Email Address
                                            </h3>
                                            <p className="text-slate-500 sm:text-base text-sm">quizbee@example.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <div className="me-2 sm:w-20 w-16 sm:h-20 h-16 max-h-full max-w-full p-2 flex justify-center items-center rounded">
                                            <Image
                                                className="sm:h-12 h-10 w-10 sm:w-12"
                                                src="/telephone.png"
                                                height={60}
                                                width={60}
                                                alt="img"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="sm:text-lg font-semibold text-slate-500">Phone Number</h3>
                                            <p className="text-slate-500 sm:text-base text-sm">+8801700000000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-center">
                                    <form className="flex flex-col justify-center items-center w-[400px] max-w-full px-5 py-10 z-20 rounded-md shadow-lg bg-[#5F49F2] ">
                                        <input
                                            className="w-[340px] sm:h-10 h-9 my-2 rounded ps-2 max-w-full outline-none text-gray-500"
                                            placeholder="Name"
                                            type="text"
                                        />
                                        <input
                                            className="w-[340px] sm:h-10 h-9 my-2 rounded ps-2 max-w-full outline-none text-gray-500"
                                            placeholder="Email Address"
                                            type="email"
                                        />
                                        <input
                                            className="w-[340px] sm:h-10 h-9 my-2 rounded ps-2 max-w-full outline-none text-gray-500"
                                            placeholder="Phone Number"
                                            type="number"
                                        />
                                        <textarea
                                            className="w-[340px] h-20 rounded my-2 ps-2 outline-none max-w-full text-gray-500"
                                            placeholder="Message"
                                            name=""
                                            id=""
                                        ></textarea>
                                        <input
                                            className="w-[340px] sm:h-10 h-9 my-2 max-w-full rounded bg-[#fde80e] font-bold text-gray-600"
                                            type="submit"
                                            value="Send Message"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;

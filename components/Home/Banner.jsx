'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function Banner() {
    React.useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="js__bg-image">
            <div className="grid grid-cols-3 items-center md:mx-10 mx-5 pt-10 pb-20">
                <div className="md:col-span-2 col-span-3 md:ms-10 md:me-20 md:mb-0 mb-5 overflow-hidden">
                    <h1
                        data-aos="slide-right"
                        data-aos-delay="100"
                        data-aos-duration="500"
                        className="xl:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl font-bold mb-4 lg:flex items-center gap-2"
                    >
                        <span>Welcome to</span>
                        <span className="text-primary">
                            <Typewriter
                                options={{
                                    strings: ['QuizBee'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 200,
                                    deleteSpeed: 200,
                                }}
                            />
                        </span>
                    </h1>
                    <p
                        data-aos="slide-right"
                        data-aos-delay="500"
                        data-aos-duration="500"
                        data-aos-easing="ease"
                        className="xl:text-lg sm:text-base xsm:text-sm font-medium"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illum, assumenda quia aut quos
                        repellat vero placeat dolores ex ab quae adipisci maiores non fugiat illo doloribus officiis
                        alias dolorum accusantium neque distinctio omnis debitis commodi! Sunt quam optio velit magnam
                        ea blanditiis sequi quisquam aliquid architecto consequatur officia sed incidunt, amet,
                        voluptatum odit veritatis id consectetur possimus accusamus? Necessitatibus, iste ab incidunt
                        eum possimus culpa quos repellat illo temporibus sit laudantium porro expedita pariatur?
                        Molestiae, id? Illum laboriosam repellat ducimus nemo laborum molestiae ab nihil dolorum
                        eligendi maxime, quasi perspiciatis consequatur dicta debitis tempore reiciendis dignissimos
                        ipsum voluptatibus. Explicabo veniam suscipit sed eveniet sint perferendis excepturi. Eum,
                        tempora nihil?
                    </p>
                    {/* <Button className="px-5 py-2 rounded" onClick={() => console.log('ll')}>
                        Get started
                    </Button> */}
                </div>
                <div className="flex md:justify-end justify-center md:col-span-1  col-span-3">
                    <Image
                        data-aos="fade-up-left"
                        data-aos-delay="300"
                        data-aos-duration="500"
                        height={500}
                        width={500}
                        style={{}}
                        className="md:px-0 px-8 md:w-full md:h-full msm:h-[500px] msm:w-[500px] sm:h-[400px] sm:w-[400px]"
                        src="/bee.webp"
                        alt="bee"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>
        </div>
    );
}

'use client';
import Typewriter from 'typewriter-effect';

export default function Banner() {
    return (
        <div className="js__bg-image">
            <div className="grid grid-cols-3 items-center mx-10 pt-10 pb-20">
                <div className="col-span-2 ms-10 me-20">
                    <h1 className="text-6xl font-bold mb-4 flex items-center gap-2">
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
                    <p className="text-lg font-medium">
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
                <div className="flex justify-end">
                    <img height={600} width={600} src="/bee.webp" alt="" />
                </div>
            </div>
        </div>
    );
}

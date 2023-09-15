import Slider from 'react-slick';
import { ratingsData } from '../../FakeData/RatingsData';

export default function Reviews() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    rows: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: true,
                    verticalSwiping: true,
                },
            },
        ],
    };
    return (
        <section id="reviews">
            <div className="mx-5">
                <div className="max-w-screen-xl mx-auto py-10">
                    <h1 className="border-b-2 border-[#5F49F2] mb-10 pb-5 text-2xl font-semibold">Reviews</h1>
                    <Slider {...settings} className="flex">
                        {ratingsData.map((data) => (
                            <div key={data.id} className="p-3">
                                <div className="rounded-md shadow-md p-4">
                                    <div className="flex gap- border-b border-dashed border-[#5F49F2] mb-2 pb-1">
                                        <div className="h-[40px] w-[40px] rounded-full overflow-hidden border-2 border-[#6049f2cc]">
                                            <img height={40} width={40} src="/logo.webp" alt="logo" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-[#6e6e6e]">John Doe</h4>
                                            <h5 className="text-xs italic text-[#757575]">6 August, 2023</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#505050ec]">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, quibusdam
                                            voluptates deleniti odit ad tempora tempore natus explicabo! Excepturi,
                                            ducimus? voluptates deleniti odit ad tempora tempore natus explicabo!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

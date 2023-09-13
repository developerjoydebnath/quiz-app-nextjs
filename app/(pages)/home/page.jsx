'use client';

import Banner from '../../../components/Home/Banner';
import PopularTopics from '../../../components/Home/PopularTopics';
import Ratings from '../../../components/Home/Ratings';
import Reviews from '../../../components/Home/Reviews';
import Testimonials from '../../../components/Home/Testimonials';

export default function Landing() {
    return (
        <div>
            <div className="">
                <Banner />
                <PopularTopics />
                <Testimonials />
                <Ratings />
                <Reviews />
            </div>
        </div>
    );
}

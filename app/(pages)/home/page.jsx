'use client';

import React from 'react';
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
                <div id="contact_us">contact us</div>
            </div>
        </div>
    );
}

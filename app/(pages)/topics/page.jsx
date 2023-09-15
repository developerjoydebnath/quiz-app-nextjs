'use client';

import { useSelector } from 'react-redux';
import AllTopics from '../../../components/Topic/AllTopics';
import TopTopics from '../../../components/Topic/TopTopics';

export default function Topics() {
    const auth = useSelector((state) => state.auth);
    console.log(auth);
    return (
        <div>
            <div className="max-w-screen-lg mx-auto">
                <TopTopics />
                <AllTopics />
            </div>
        </div>
    );
}

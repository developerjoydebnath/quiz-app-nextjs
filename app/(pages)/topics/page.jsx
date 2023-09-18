'use client';

import AllTopics from '../../../components/Topic/AllTopics';
import TopTopics from '../../../components/Topic/TopTopics';

export default function Topics() {
    return (
        <div>
            <div className="max-w-screen-lg mx-auto">
                <TopTopics />
                <AllTopics />
            </div>
        </div>
    );
}

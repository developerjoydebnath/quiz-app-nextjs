export const Icon = ({ className = '', icon = '' }) => {
    switch (icon) {
        case 'lock':
            return (
                <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                </svg>
            );
        case 'loading':
            return (
                <svg
                    className={className}
                    id="Layer_1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                >
                    <path d="m13 1v2a1 1 0 0 1 -2 0v-2a1 1 0 0 1 2 0zm-1 19a1 1 0 0 0 -1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0 -1-1zm-8-8a1 1 0 0 0 -1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm19-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm-4.982-9.382a1 1 0 0 0 -1.367.364l-1 1.731a1 1 0 0 0 .365 1.366.987.987 0 0 0 .5.135 1 1 0 0 0 .866-.5l1-1.731a1 1 0 0 0 -.364-1.365zm-10.031 17.303a1 1 0 0 0 -1.366.364l-1 1.731a1 1 0 0 0 .364 1.366.989.989 0 0 0 .5.135 1 1 0 0 0 .867-.5l1-1.731a1 1 0 0 0 -.365-1.365zm-3.272-12.3-1.731-1a1 1 0 0 0 -1 1.731l1.731 1a1 1 0 0 0 1-1.731zm17.3 10.03-1.731-1a1 1 0 0 0 -1 1.731l1.731 1a.987.987 0 0 0 .5.135 1 1 0 0 0 .5-1.866zm-14.666-14.669a1 1 0 0 0 -1.731 1l1 1.731a1 1 0 0 0 .866.5.987.987 0 0 0 .5-.135 1 1 0 0 0 .365-1.366zm10.03 17.3a1 1 0 0 0 -1.731 1l1 1.731a1 1 0 0 0 1.731-1zm2.408-10.8a1 1 0 0 0 .5-.134l1.731-1a1 1 0 0 0 -1-1.731l-1.731 1a1 1 0 0 0 .5 1.865zm-16.074 7.166-1.731 1a1 1 0 0 0 .5 1.866.987.987 0 0 0 .5-.135l1.731-1a1 1 0 0 0 -1-1.731z" />
                </svg>
            );
        case 'done':
            return (
                <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path d="M240-268 70-438q-12-12-11.5-28T71-494q12-11 28-11.5t28 11.5l142 142 56 56-29 28q-12 11-28 11.5T240-268Zm226 0L296-438q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l141 141 340-340q12-12 28-11.5t28 12.5q11 12 11.5 28T890-636L522-268q-12 12-28 12t-28-12Zm28-198-57-56 170-170q11-11 27.5-11t28.5 11q12 12 12 28.5T663-635L494-466Z" />
                </svg>
            );
        case 'dot-pattern':
            return (
                <svg className={className} id="10015.io" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern
                            id="svg-pattern"
                            x="0"
                            y="0"
                            width="48"
                            height="48"
                            patternUnits="userSpaceOnUse"
                            patternTransform="translate(16, 16) rotate(0) skewX(0)"
                        >
                            <svg width="32" height="32" viewBox="0 0 100 100">
                                <g fill="#696969" opacity="1">
                                    <circle cx="50" cy="50" r="50"></circle>
                                </g>
                            </svg>
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="#ffffff"></rect>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#svg-pattern)"></rect>
                </svg>
            );
        default:
            return;
    }
};

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-primary sticky top-0 z-50 drop-shadow">
            {/* <header className="bg-[#F2385A]"> */}
            <div className="flex justify-between items-center py-4 mx-10">
                <div>
                    <Link href="/" className="text-white text-xl px-4 py-1 flex items-center gap-1">
                        <span>
                            <img className="h-10 w-10 rounded-full" src="/logo.webp" alt="" />
                        </span>
                        <span>QuizBee</span>
                    </Link>
                </div>
                <div className="flex items-center gap-5">
                    <Link className="text-white px-4 py-1" href="/topics">
                        Topics
                    </Link>
                    <Link className="text-white px-4 py-1" href="/">
                        Account
                    </Link>
                    <Link className="text-white px-4 py-1" href="/">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}

// #F28B0C

// #19D3AE

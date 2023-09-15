import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../redux/features/auth/authSlice';

export default function Navbar() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('auth');
        dispatch(userLogOut());
    };

    return (
        <nav className="bg-primary sticky top-0 z-50 drop-shadow">
            {/* <header className="bg-[#F2385A]"> */}
            <div className="flex justify-between items-center py-4 md:mx-10 mx-5">
                <div>
                    <Link href="/" className="text-white text-xl py-1 flex items-center gap-1">
                        <span>
                            <img className="h-10 w-10 rounded-full" src="/logo.webp" alt="" />
                        </span>
                        <span>QuizBee</span>
                    </Link>
                </div>
                <div className="md:flex hidden items-center gap-3">
                    <Link className="text-white px-4 py-1" href="/topics">
                        Topics
                    </Link>
                    <Link className="text-white px-4 py-1" href="/#contact_us">
                        Contact Us
                    </Link>
                    <Link className="text-white px-4 py-1" href="/#reviews">
                        Reviews
                    </Link>
                    {auth.isLoggedIn ? (
                        <React.Fragment>
                            <Link className="text-white px-4 py-1" href="/user/account">
                                Account
                            </Link>
                            <span
                                onClick={handleLogout}
                                className="text-white px-4 py-1 cursor-pointer"
                                href="/user/account"
                            >
                                Logout
                            </span>
                        </React.Fragment>
                    ) : (
                        <Link className="text-white px-4 py-1" href="/login">
                            Login
                        </Link>
                    )}
                </div>
                <div className="md:hidden block">
                    <h1>X</h1>
                </div>
            </div>
        </nav>
    );
}

'use client';

import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../Icons/Icon';
import { userLogOut } from '../../redux/features/auth/authSlice';

export default function Navbar() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = React.useState(false);

    const handleLogout = () => {
        setIsOpen(false);
        localStorage.removeItem('auth');
        dispatch(userLogOut());
    };

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 h-full z-50 drop-shadow-md">
            <div className="relative bg-primary shadow-lg">
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
                        <Link className="text-white px-4 py-1" href="/">
                            Home
                        </Link>
                        <Link className="text-white px-4 py-1" href="/topics">
                            Topics
                        </Link>
                        <Link className="text-white px-4 py-1" href="/#reviews">
                            Reviews
                        </Link>
                        <Link className="text-white px-4 py-1" href="/#contact_us">
                            Contact Us
                        </Link>

                        {auth.isLoggedIn ? (
                            <React.Fragment>
                                <Link className="text-white px-4 py-1" href="/user/account">
                                    Account
                                </Link>
                                <span
                                    onClick={handleLogout}
                                    className="text-white px-4 py-1 cursor-pointer flex items-center gap-1"
                                    href="/user/account"
                                >
                                    <span>Logout</span>
                                    <Icon className="h-4 w-4 fill-white" icon="logout" />
                                </span>
                            </React.Fragment>
                        ) : (
                            <Link className="text-white px-4 py-1" href="/login">
                                Login
                            </Link>
                        )}
                    </div>
                    <div className="md:hidden block p-1 fill-white" onClick={handleOpen}>
                        {isOpen ? <Icon icon="cross" className="h-7 w-7" /> : <Icon icon="menu" className="h-6 w-6" />}
                    </div>
                </div>
                <div
                    className={`absolute bg-[#6049f2f5] rounded-b-xl py-5 -z-10 w-full left-0 transition-all ${
                        isOpen ? 'top-full' : '-top-60'
                    }`}
                >
                    <div>
                        <div className="md:hidden flex flex-col items-center gap-3">
                            <Link onClick={() => setIsOpen(false)} className="text-white px-4 py-1" href="/">
                                Home
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-white px-4 py-1" href="/topics">
                                Topics
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-white px-4 py-1" href="/#reviews">
                                Reviews
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-white px-4 py-1" href="/#contact_us">
                                Contact Us
                            </Link>

                            {auth.isLoggedIn ? (
                                <React.Fragment>
                                    <Link
                                        onClick={() => setIsOpen(false)}
                                        className="text-white px-4 py-1"
                                        href="/user/account"
                                    >
                                        Account
                                    </Link>
                                    <span
                                        onClick={handleLogout}
                                        className="text-white px-4 py-1 cursor-pointer flex items-center gap-2"
                                        href="/user/account"
                                    >
                                        <span>Logout</span>
                                        <Icon className="h-4 w-4 fill-white" icon="logout" />
                                    </span>
                                </React.Fragment>
                            ) : (
                                <Link
                                    onClick={() => setIsOpen(false)}
                                    className="text-white px-4 py-1 flex items-center gap-1"
                                    href="/login"
                                >
                                    <span>Login</span>
                                    <Icon icon="login" className="h-5 w-5 fill-white" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loading, userLoggedIn } from '../redux/features/auth/authSlice';
import Loading from './Loading/Loading';

export const CheckUser = ({ children }) => {
    const auth = useSelector((state) => state.auth);
    const path = usePathname();
    const router = useRouter();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loading(true));
        const auth = localStorage.getItem('auth');
        const user = JSON.parse(auth);

        if (user) {
            dispatch(userLoggedIn(user));
        }
    }, []);

    React.useEffect(() => {
        if (path !== '/' && !path.includes('home') && !auth?.isLoggedIn && !auth.loading) {
            router.push('/login');
        }
        if (!auth.isLoggedIn) {
            dispatch(loading(false));
        }
    }, [auth, path]);

    if (auth.loading) {
        return <Loading />;
    }

    return <React.Fragment>{children}</React.Fragment>;
};

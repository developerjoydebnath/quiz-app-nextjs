'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../Icons/Icon';
import { userLoggedIn } from '../../../redux/features/auth/authSlice';

export default function Login() {
    const auth = useSelector((state) => state.auth);
    const [email, setEmail] = React.useState('admin@example.com');
    const [password, setPassword] = React.useState('admin');
    const dispatch = useDispatch();
    const router = useRouter();
    const path = usePathname();

    React.useEffect(() => {
        if (auth.isLoggedIn && path === '/login') {
            console.log('form login pase');
            router.push('/');
        }
    }, [auth]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'admin@example.com' && password === 'admin') {
            dispatch(
                userLoggedIn({
                    user: 'admin@example.com',
                    isLoggedIn: true,
                    loading: false,
                }),
            );
            localStorage.setItem(
                'auth',
                JSON.stringify({ user: 'admin@example.com', isLoggedIn: true, loading: false }),
            );
        }
    };

    return (
        <div className="w-full h-screen">
            <div className="flex justify-center items-center h-full">
                <div className="border rounded-lg shadow-lg">
                    <form className="sm:m-10 m-6" onSubmit={handleLogin}>
                        <div className="flex justify-center">
                            <div className="p-2 rounded-full bg-slate-200">
                                <Icon className="sm:h-8 h-6 sm:w-8 w-6" icon="lock" />
                            </div>
                        </div>
                        <h4 className="sm:text-2xl text-xl font-bold text-center text-slate-600">Login</h4>
                        <div className="my-3">
                            <label htmlFor="email" className="text-sm text-slate-500">
                                Email
                            </label>
                            <br />
                            <input
                                required
                                className="border outline-none sm:w-80 w-60 sm:h-10 h-8 rounded px-2"
                                placeholder=""
                                type="email"
                                name="email"
                                id="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                value={email}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="password" className="text-sm text-slate-500">
                                Password
                            </label>{' '}
                            <br />
                            <input
                                required
                                className="border outline-none sm:w-80 w-60 sm:h-10 h-8 rounded px-2"
                                placeholder=""
                                type="password"
                                name="password"
                                id="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                value={password}
                            />
                        </div>
                        <div className="my-5">
                            <input
                                className="cursor-pointer sm:w-80 w-60 sm:h-10 h-8 bg-slate-300 rounded font-bold"
                                type="submit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

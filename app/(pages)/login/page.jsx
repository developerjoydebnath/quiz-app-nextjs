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
                    <form className="m-10" onSubmit={handleLogin}>
                        <div className="flex justify-center">
                            <div className="p-2 rounded-full bg-slate-200">
                                <Icon className="h-8 w-8" icon="lock" />
                            </div>
                        </div>
                        <h4 className="text-2xl font-bold text-center text-slate-600">Login</h4>
                        <div className="my-3">
                            <label htmlFor="email" className="text-sm text-slate-500">
                                Email
                            </label>
                            <br />
                            <input
                                required
                                className="border outline-none w-80 h-10 rounded px-2"
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
                                className="border outline-none w-80 h-10 rounded px-2"
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
                                className="cursor-pointer w-80 h-10 bg-slate-300 rounded"
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

"use client";
import { useState, useEffect } from "react";
const CountDownNav = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Target: Jan 26, 2026
        const target = new Date("2026-01-26T00:00:00").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const diff = target - now;

            if (diff <= 0) {
                clearInterval(timer);
            } else {
                setTimeLeft({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / 1000 / 60) % 60),
                    seconds: Math.floor((diff / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="navbar bg-base-300 text-secondary shadow-sm">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a> */}

            </div>
            <div className="navbar-center lg:flex">

                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col font-mono text-2xl self-center">
                        SALE ENDS IN
                    </div>
                    <div className="flex flex-col">
                        <span className="countdown font-mono text-3xl">
                            <span style={{ "--value": timeLeft.days } as React.CSSProperties} aria-live="polite" >{timeLeft.days}</span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col">
                        <span className="countdown font-mono text-3xl">
                            <span style={{ "--value": timeLeft.hours } as React.CSSProperties} aria-live="polite" >{timeLeft.hours}</span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col">
                        <span className="countdown font-mono text-3xl">
                            <span style={{ "--value": timeLeft.minutes } as React.CSSProperties} aria-live="polite" >{timeLeft.minutes}</span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col">
                        <span className="countdown font-mono text-3xl">
                            <span style={{ "--value": timeLeft.seconds } as React.CSSProperties} aria-live="polite" >{timeLeft.seconds}</span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    )
}

export default CountDownNav
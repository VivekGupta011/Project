"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { Vinklogo } from '../icon/logo'
import { Cart } from '../icon/cart'
import { Vinklogoblack } from '../icon/vinkblack';
import { useRouter } from 'next/navigation';

const Navigation = () => {
    // State variable to track mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    // Function to toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            {/* component */}
            <nav className="relative px-4 py-4 flex justify-between items-center bg-vink-pink-dark">

                <div className='' style={{marginBottom:"1%"}}>

                    <ul className="hidden absolute px-[15px] lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                        <li>
                            <Link className="text-lg text-white font-semibold hover:text-gray-500" href="#">
                                Shop
                            </Link>
                        </li>

                        <li>
                            <Link className="text-lg text-white font-semibold" href="#">
                                Business
                            </Link>
                        </li>

                        <li>
                            <Link className="text-lg text-white  font-semibold hover:text-gray-500" href="#">
                                Help
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className='absolute lg:static'>
                    <Link className="text-3xl  font-bold leading-none" href="#">
                        <Vinklogo />
                    </Link>
                </div>
                <div className="relative left-1/2 transform -translate-x-1/2 lg:hidden">
                    <button
                        className="navbar-burger flex items-center text-white p-3"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            className="block h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                <div>
                    <Link
                        className="hidden text-lg text-white font-bold lg:inline-block lg:ml-auto lg:mr-8"
                        href="#"
                    >
                        Contact us
                    </Link>
                    <Link
                        className="hidden text-lg text-white font-bold lg:inline-block lg:ml-auto lg:mr-8"
                        href="/login"
                    >
                        Login
                    </Link>
                    <Link
                        className="hidden text-lg text-white font-bold lg:inline-block lg:ml-auto lg:mr-8"
                        href="#"
                    >
                        <Cart />
                    </Link>
                </div>
            </nav>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={`navbar-menu relative z-50 lg:hidden ${isMobileMenuOpen ? 'active' : ''}`}>
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <Link className="mr-auto text-3xl font-bold leading-none" href="#">
                                <Vinklogoblack />
                            </Link>
                            <button className="navbar-close" onClick={toggleMobileMenu}>
                                <svg
                                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-1">
                                    <Link
                                        className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                        href="#"
                                    >
                                        Stop
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                        href="#"
                                    >
                                        About Business
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                        href="#"
                                    >
                                        Help
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-auto">
                            <div className="pt-6">
                                <Link
                                    className="block px-4 py-3 mb-3  text-xs text-center font-semibold text-white bg-vink-pink-dark hover:bg-blue-700 rounded-xl"
                                    href="#"
                                >
                                    Sign in
                                </Link>
                                <Link
                                    className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-vink-pink-dark hover:bg-blue-700  rounded-xl"
                                    href="#"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </nav>

                </div>
            )}

        </>

    )
}

export default Navigation

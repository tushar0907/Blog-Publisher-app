import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">

                <Link href="/">
                    <img className="w-16 object-contain cursor-pointer"
                        src="https://www.pngitem.com/pimgs/m/100-1000583_chrome-copyrighted-cool-non-copyrighted-logos-png-transparent.png"
                        alt="Logo" />
                </Link>

                <div className="hidden cursor-pointer md:inline-flex items-center space-x-5">
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 className="text-white bg-blue-600 px-4 py-1 rounded-full">Follow</h3>
                </div>
            </div>
            <div className="flex cursor-pointer items-center space-x-5 text-blue-600">
                <h3 className="">Sign In</h3>
                <h3 className="border px-4 py-1 rounded-full border-blue-600">Get Started</h3>
            </div>
        </header>
    )
}

export default Header
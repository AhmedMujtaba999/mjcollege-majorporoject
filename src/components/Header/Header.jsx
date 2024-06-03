import React from 'react'

function Header() {
    return (
        <nav className="fixed w-full z-10 top-0 bg-transparent hover:bg-gray-900 transition duration-300">
            <div className="container mx-auto px-4 py-2 flex items-center">
                <a href="#" className="pr-14 text-white text-2xl font-bold">Visual fusion</a>
                <div className='px-14 '></div>
                <div className='px-14 '></div>
                <div className='px-14 '></div>
                <div className=" space-x-14 pl-14">
                    <a href="/" className="text-white hover:text-gray-400">Home</a>
                    <a href="/learn" className="text-white hover:text-gray-400">Learn More</a>
                    <a href="/try" className="text-white hover:text-gray-400">Try Out</a>
                    <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
                </div>

            </div>
        </nav>
    )
}

export default Header
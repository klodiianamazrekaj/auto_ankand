'use client'

import React from 'react'
import { RiAuctionLine } from 'react-icons/ri'

export default function Navbar() {
    return (
    <header className='sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-sm'>
        <div className='flex items-center gap-2 text-3xl font-semibold text-primaryColor'>
            <RiAuctionLine size={34}/>
            <div>Auto Ankand</div>
        </div>
        <div>Search</div>
        <div>Login</div>
    </header>
    )
}

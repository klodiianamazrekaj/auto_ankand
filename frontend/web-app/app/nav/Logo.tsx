'use client'

import { useParamsStore } from '@/hooks/useParamsStore'
import React from 'react'
import { RiAuctionLine } from 'react-icons/ri'

export default function Logo() {
    const reset = useParamsStore(state => state.reset);
    return (
        <div onClick={reset} className='cursor-pointer flex items-center gap-2 text-3xl font-semibold text-primaryColor'>
            <RiAuctionLine size={34} />
            <div>Auto Ankand</div>
        </div>
    )
}

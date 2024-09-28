'use client'

import { useParamsStore } from '@/hooks/useParamsStore'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'
import { RiAuctionLine } from 'react-icons/ri'

export default function Logo() {
    const router = useRouter();
    const pathname = usePathname();

    function doReset() {
        if (pathname !== '/') router.push('/');
        reset();
    }

    const reset = useParamsStore(state => state.reset);
    
    return (
        <div onClick={doReset} className='cursor-pointer flex items-center gap-2 text-3xl font-semibold text-primaryColor'>
            <RiAuctionLine size={34} />
            <div>Auto Ankand</div>
        </div>
    )
}

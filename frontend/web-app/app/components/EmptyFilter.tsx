import { useParamsStore } from '@/hooks/useParamsStore'
import React from 'react'
import Heading from './Heading';
import { Button } from 'flowbite-react';

type Props = {
    title?: string,
    subtitle?: string,
    showReset?: boolean
}

export default function EmptyFilter({
    title = 'Nuk ka përputhje për këtë filtrim',
    subtitle = 'Provo të ndryshosh ose të rivendosësh filtrin.',
    showReset
}: Props) {
    const reset = useParamsStore(state => state.reset);

    return (
        <div className='h-[40vh] flex flex-col gap-2 justify-center items-center shadow-lg'>
            <Heading title={title} subtitle={subtitle} center />
            <div className='mt-4'>
                {showReset && (
                    <Button outline onClick={reset}>Largo Filtrat</Button>
                )}
            </div>
        </div>
    )
}

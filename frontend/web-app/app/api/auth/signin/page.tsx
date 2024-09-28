import EmptyFilter from '@/app/components/EmptyFilter'
import React from 'react'

export default function SignIn({ searchParams }: { searchParams: { callbackUrl: string } }) {
    return (
        <EmptyFilter
            title='Duhet të jeni të kyçur për ta bërë këtë.'
            subtitle='Ju lutemi klikoni më poshtë për t`u kyçur.'
            showLogin
            callbackUrl={searchParams.callbackUrl}
        />
    )
}
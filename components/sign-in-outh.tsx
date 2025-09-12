'use client'

import { useState } from 'react'
import { toast } from 'sonner'

import { Routes } from '@/config/routes'
import { signIn } from '@/lib/auth-client'

import { Button } from './ui/button'

interface SingInOuthButtonProps {
    provider: 'google' | 'github'
    signUp?: boolean
}

export const SignInOauthButton = ({ provider, signUp }: SingInOuthButtonProps) => {
    const [isPending, setIsPending] = useState(false)
    async function handleClick() {
        await signIn.social({
            provider,
            callbackURL: Routes.profile,
            fetchOptions: {
                onRequest: () => {
                    setIsPending(true)
                },
                onResponse: () => {
                    setIsPending(false)
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message)
                },
            },
        })
    }

    const action = signUp ? 'Up' : 'In'
    const providerName = provider === 'google' ? 'Google' : 'GitHub'

    return (
        <Button onClick={handleClick} disabled={isPending}>
            Sing {action} with {providerName}
        </Button>
    )
}

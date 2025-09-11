'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { APIError } from 'better-auth/api'

import { auth, ErrorCode } from '@/lib/auth'

export async function signInWithEmailAndPassword(email: string, password: string) {
    if (!email) return { error: 'Please enter your email' }

    if (!password) return { error: 'Please enter your password' }

    try {
        await auth.api.signInEmail({
            headers: await headers(),
            body: {
                email,
                password,
            },
        })
        return { error: null }
    } catch (err) {
        if (err instanceof APIError) {
            const errCode = err.body ? (err.body.code as ErrorCode) : 'UNKNOWN'
            console.dir(err, { depth: 5 })
            switch (errCode) {
                case 'EMAIL_NOT_VERIFIED':
                    redirect('/auth/verify?error=email_not_verified')
                default:
                    return { error: err.message }
            }
        }

        return { error: 'Internal Server Error' }
    }
}

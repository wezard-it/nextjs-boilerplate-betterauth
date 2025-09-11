'use server'

import { APIError } from 'better-auth/api'

import { auth, ErrorCode } from '@/lib/auth'

export async function signUpWithEmailAndPassword(name: string, email: string, password: string) {
    if (!name) return { error: 'Please enter your name' }

    if (!email) return { error: 'Please enter your email' }

    if (!password) return { error: 'Please enter your password' }

    try {
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
            },
        })

        return { error: null }
    } catch (err) {
        if (err instanceof APIError) {
            const errCode = err.body ? (err.body.code as ErrorCode) : 'UNKNOWN'

            switch (errCode) {
                case 'USER_ALREADY_EXISTS':
                    return { error: 'Oops! Something went wrong. Please try again.' }
                default:
                    return { error: err.message }
            }
        }

        return { error: 'Internal Server Error' }
    }
}

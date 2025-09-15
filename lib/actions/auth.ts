'use server'

import { headers } from 'next/headers'
import { APIError } from 'better-auth/api'

import { auth } from '@/config/auth'

export async function signInWithEmailAndPassword(email: string, password: string) {
    try {
        await auth.api.signInEmail({
            headers: await headers(),
            body: {
                email,
                password,
            },
        })
        return
    } catch (err) {
        if (err instanceof APIError) {
            return { error: err.message }
        }
    }
}

export async function signUpWithEmailAndPassword(name: string, email: string, password: string) {
    try {
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
            },
        })

        return
    } catch (err) {
        if (err instanceof APIError) {
            return { error: err.message }
        }
    }
}

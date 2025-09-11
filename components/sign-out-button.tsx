'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { Routes } from '@/config/routes'
import { signOut } from '@/lib/auth-client'

import { Button } from './ui/button'

export const SignOutButton = () => {
    const router = useRouter()
    const t = useTranslations('SignOutButton')

    const handleLogOut = async () => {
        await signOut({
            fetchOptions: {
                onError: (ctx) => {
                    toast.error(ctx.error.message)
                },
                onSuccess: () => {
                    router.replace(Routes.home)
                },
            },
        })
    }

    return <Button onClick={handleLogOut}>{t('log_out')}</Button>
}

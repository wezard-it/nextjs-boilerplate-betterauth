import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { Routes } from '@/config/routes'
import { SignInOauthButton } from '@/components/sign-in-oauth'

import { LogInForm } from './components/logInForm'

export default async function logInPage() {
    const t = await getTranslations()
    return (
        <main className='flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
            <div className='flex w-full max-w-sm flex-col gap-6'>
                <div className='flex items-center gap-2 justify-between font-medium'>
                    <Link href={Routes.home}>
                        <div className='flex'>
                            <ChevronLeft /> {t('login_page.home')}
                        </div>
                    </Link>
                    <Link href={Routes.signup}>
                        <div className='flex'>
                            {t('login_page.signup_link')} <ChevronRight />
                        </div>
                    </Link>
                </div>

                <LogInForm />

                <hr className='max-w-sm' />

                <div className='flex justify-around gap-4'>
                    <SignInOauthButton provider='google' signUp={false} className='flex w-full' />
                    <SignInOauthButton provider='github' signUp={false} className='flex w-full' />
                </div>
            </div>
        </main>
    )
}

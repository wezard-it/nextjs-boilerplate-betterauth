import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { Routes } from '@/config/routes'
import { SignInOauthButton } from '@/components/sign-in-oauth'

import { SignUpForm } from './components/signUpForm'

export default async function signUpPage() {
    const t = await getTranslations()

    return (
        <main className='flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
            <div className='flex w-full max-w-sm flex-col gap-6'>
                <div className='flex items-center gap-2 justify-between font-medium'>
                    <Link href={Routes.home}>
                        <div className='flex'>
                            <ChevronLeft /> {t('sign_up_page.home')}
                        </div>
                    </Link>
                    <Link href={Routes.login}>
                        <div className='flex'>
                            {t('sign_up_page.login_link')} <ChevronRight />
                        </div>
                    </Link>
                </div>

                <SignUpForm />

                <hr className='max-w-sm' />

                <div className='flex justify-around gap-4'>
                    <SignInOauthButton provider='google' signUp={true} className='flex w-full' />
                    <SignInOauthButton provider='github' signUp={true} className='flex w-full' />
                </div>
            </div>
        </main>
    )
}

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { Routes } from '@/config/routes'
import { LogInForm } from '@/components/logInForm'
import { SignInOauthButton } from '@/components/sign-in-outh'

export default async function logInPage() {
    const t = await getTranslations('LoginPage')
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div className='space-y-4'>
                <div className='flex justify-between gap-5 mx-2'>
                    <Link href={Routes.home}>
                        <div className='flex'>
                            <ChevronLeft /> {t('home')}
                        </div>
                    </Link>
                    <Link href={Routes.signup}>
                        <div className='flex'>
                            {t('signup_link')} <ChevronRight />
                        </div>
                    </Link>
                </div>
                <LogInForm />

                <hr className='max-w-sm' />

                <div className='flex flex-col max-w-sm gap-4'>
                    <SignInOauthButton provider='google' signUp={false} />

                    <SignInOauthButton provider='github' signUp={false} />
                </div>
            </div>
        </main>
    )
}

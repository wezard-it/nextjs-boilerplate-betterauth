import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { Routes } from '@/config/routes'
import { SignInOauthButton } from '@/components/sign-in-outh'
import { SignUpForm } from '@/components/signUpForm'

export default async function signUpPage() {
    const t = await getTranslations('SignUpPage')

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div className='space-y-4'>
                <div className='flex justify-between gap-5 mx-2'>
                    <Link href={Routes.home}>
                        <div className='flex'>
                            <ChevronLeft /> {t('home')}
                        </div>
                    </Link>
                    <Link href={Routes.login}>
                        <div className='flex'>
                            {t('login_link')} <ChevronRight />
                        </div>
                    </Link>
                </div>

                <SignUpForm />

                <hr className='max-w-sm' />

                <div className='flex flex-col gap-4'>
                    <SignInOauthButton provider='google' signUp={true} />
                    <SignInOauthButton provider='github' signUp={true} />
                </div>
            </div>
        </main>
    )
}

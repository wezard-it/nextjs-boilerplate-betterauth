import { headers } from 'next/headers'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

import { auth } from '@/config/auth'
import { Routes } from '@/config/routes'
import { SignOutButton } from '@/components/sign-out-button'

export default async function profilePage() {
    const session = await auth.api.getSession({
        headers: headers(),
    })

    if (!session) {
        redirect(Routes.login)
    }

    const t = await getTranslations()

    return (
        <main className='flex min-h-screen flex-col justify-between p-24'>
            <div className='flex space-y-8 justify-between'>
                <div className='flex gap-3'>
                    {session?.user.image ? (
                        <div className='my-auto'>
                            <Image
                                className='size-14 rounded-full'
                                src={session.user.image}
                                alt={`${session.user.name}'s profile picture`}
                                width={56}
                                height={56}
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                    <h1 className='flex text-3xl font-bold my-auto '>{t('profile.title')}</h1>
                </div>
                <SignOutButton />
            </div>
            <span>{t('profile.welcome_message', { name: session?.user.name })}</span>
            <pre className='text-sm overflow-clip'>{JSON.stringify(session, null, 2)}</pre>
        </main>
    )
}

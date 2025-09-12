import { headers } from 'next/headers'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import { auth } from '@/lib/auth'
import { SignOutButton } from '@/components/sign-out-button'

export default async function profilePage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    const t = await getTranslations('Profile')

    if (!session) {
        return <p className='text-destructive'>{t('unauthorized')}</p>
    }

    return (
        <main className='flex min-h-screen flex-col justify-between p-24'>
            <div className='flex space-y-8 justify-between'>
                <div className='flex gap-3'>
                    {session.user.image ? (
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
                    <h1 className='flex text-3xl font-bold my-auto '>{t('title')}</h1>
                </div>
                <SignOutButton />
            </div>
            <span>{t('welcome_message', { name: session.user.name })}</span>
            <pre className='text-sm overflow-clip'>{JSON.stringify(session, null, 2)}</pre>
        </main>
    )
}

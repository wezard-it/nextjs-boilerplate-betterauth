import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import { Routes } from '@/config/routes'
import { Button } from '@/components/ui/button'

export default async function Home() {
    const t = await getTranslations()

    return (
        <main className='flex flex-col min-h-screen justify-center items-center gap-20 '>
            <div className='flex flex-col gap-5 items-center'>
                <h1 className='text-4xl font-bold text-black'>{t('welcome')}</h1>
                <p className='text-lg text-black'>{t('slogan')}</p>
                <Image src='/next.svg' alt='Next.js logo' width={500} height={500} />
            </div>
            <div className=' max-w-sm  gap-5'>
                <div className='grid grid-row-2 w-full justify-center border rounded-lg p-5 gap-5 '>
                    <span className=' my-auto '>{t('home.log_in_to_continue')}</span>
                    <Button>
                        <Link href={Routes.login}>{t('home.log_in')}</Link>
                    </Button>
                    <div className='flex items-center'>
                        <div className='h-px flex-1 bg-border' />
                        <span className='px-3 text-sm text-muted-foreground'>{t('home.or')}</span>
                        <div className='h-px flex-1 bg-border' />
                    </div>
                    <Button>
                        <Link href={Routes.signup}>{t('home.sign_up')}</Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}

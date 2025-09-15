'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Routes } from '@/config/routes'
import { signInWithEmailAndPassword } from '@/lib/actions/auth'
import { signInFormSchema } from '@/lib/validation'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const LogInForm = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const t = useTranslations()

    const form = useForm<z.infer<typeof signInFormSchema>>({
        resolver: zodResolver(signInFormSchema),
        reValidateMode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = form.handleSubmit(async (data: z.infer<typeof signInFormSchema>) => {
        setLoading(true)

        const res = await signInWithEmailAndPassword(data.email, data.password)

        if (res?.error) {
            toast.error(res.error)
            setLoading(false)
        } else {
            toast.success(t('login.success'))
            router.push(Routes.profile)
        }
    })

    return (
        <Form {...form}>
            <form onSubmit={onSubmit} className='border space-y-4 rounded-xl p-5 '>
                <div className='space-y-2 text-center'>
                    <span className=' text-2xl font-bold'>{t('login.title')}</span>
                    <p>{t('login.slogan')}</p>
                </div>

                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem className='space-y-2'>
                            <FormLabel>{t('login.email')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('login.email_placeholder')} type='email' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem className='space-y-2'>
                            <FormLabel>{t('login.password')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('login.password_placeholder')} type='password' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className='w-full' type='submit' disabled={loading}>
                    {loading ? t('login.logging_in') : t('login.log_in')}
                </Button>
            </form>
        </Form>
    )
}

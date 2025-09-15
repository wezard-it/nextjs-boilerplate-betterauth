'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Routes } from '@/config/routes'
import { signUpWithEmailAndPassword } from '@/lib/actions/auth'
import { signUpFormSchema } from '@/lib/validation'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const SignUpForm = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const t = useTranslations()

    const form = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
        },
    })

    const onSubmit = async (data: z.infer<typeof signUpFormSchema>) => {
        setLoading(true)

        const res = await signUpWithEmailAndPassword(data.name, data.email, data.password)

        if (res?.error) {
            toast.error(t(`errors.${res.error}`))
            setLoading(false)
            return
        } else {
            toast.success(t('sign_up.success'))
            router.replace(Routes.login)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='border space-y-4 rounded-xl p-5 '>
                <div className='space-y-2 text-center'>
                    <span className='text-2xl font-bold'>{t('sign_up.title')}</span>
                    <p>{t('sign_up.slogan')}</p>
                </div>

                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem className='space-y-2'>
                            <FormLabel>{t('sign_up.name')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('sign_up.name_placeholder')} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem className='space-y-2'>
                            <FormLabel>{t('sign_up.email')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('sign_up.email_placeholder')} type='email' {...field} />
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
                            <FormLabel>{t('sign_up.password')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('sign_up.password_placeholder')} type='password' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='confirm_password'
                    render={({ field }) => (
                        <FormItem className='space-y-2'>
                            <FormLabel>{t('sign_up.confirm_password')}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t('sign_up.confirm_password_placeholder')}
                                    type='password'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className='w-full' type='submit' disabled={loading}>
                    {loading ? t('sign_up.signing_up') : t('sign_up.sign_up')}
                </Button>
            </form>
        </Form>
    )
}

/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./config/locale/i18n.ts')

const nextConfig = {
    images: {
        remotePatterns: [],
    },
}

export default withNextIntl(nextConfig)
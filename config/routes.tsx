export const Routes = {
    home: '/',
    signup: '/auth/signup',
    login: '/auth/login',
    profile: '/profile',
}

export const authRoutes = [Routes.signup, Routes.login]
export const protectedRoutes = [Routes.profile]

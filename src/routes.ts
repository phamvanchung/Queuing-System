import { IRoutes } from './models'
import { lazy } from 'react'
import AdminLayout from './components/Layout'
import AuthGuard from './guards/AuthGuard'
import GuestGuard from './guards/GuestGuard'

const LoginPage = lazy(() => import('./pages/Login'))

const DashboardPage = lazy(() => import('./pages/Dashboard'))

export const routes: IRoutes[] = [
  {
    path: '/',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: DashboardPage,
  },
  {
    path: '/login',
    exact: false,
    guard: GuestGuard,
    component: LoginPage,
  },
]
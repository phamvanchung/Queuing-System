import { IRoutes } from './models'
import { lazy } from 'react'
import AdminLayout from './components/Layout'
import AuthGuard from './guards/AuthGuard'
import GuestGuard from './guards/GuestGuard'

const LoginPage = lazy(() => import('./pages/Login'))
const DashboardPage = lazy(() => import('./pages/Dashboard'))
const ChangePasswordPage = lazy(() => import('./pages/ChangePass'))
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPass'))
const ListEquipment = lazy(() => import('./pages/EquipmentPage/ListEquipment'))
const FormEquipment = lazy(() => import('./pages/EquipmentPage/FormEquipment'))
const DetailEquipment = lazy(() => import('./pages/EquipmentPage/DetailEquipment'))
const NumberLevelPage = lazy(() => import('./pages/NumberLevelPage'))
const ProfilePage = lazy(() => import('./pages/ProfilePage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const ReportPage = lazy(() => import('./pages/ReportPage'))
const SettingSystemPage = lazy(() => import('./pages/SettingSystem'))
const NotFound = lazy(() => import('./components/NotFound'))


export const routes: IRoutes[] = [
  {
    path: '/',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: DashboardPage,
  },
  {
    path: '/list-equipment',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: ListEquipment,
  },
  {
    path: '/list-equipment/add',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: FormEquipment,
  },
  {
    path: '/list-equipment/edit/:id',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: FormEquipment,
  },
  {
    path: '/list-equipment/detail/:id',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: DetailEquipment,
  },
  {
    path: '/level-number',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: NumberLevelPage,
  },
  {
    path: '/profile',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: ProfilePage,
  },
  {
    path: '/service',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: ServicePage,
  },
  {
    path: '/report',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: ReportPage,
  },
  {
    path: '/setting-system',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: SettingSystemPage,
  },
  {
    path: '/change-password',
    exact: true,
    component: ChangePasswordPage,
  },
  {
    path: '/forgot-password',
    exact: true,
    component: ForgotPasswordPage,
  },
  {
    path: '/login',
    exact: false,
    guard: GuestGuard,
    component: LoginPage,
  },
  { path: '*', component: NotFound },
]

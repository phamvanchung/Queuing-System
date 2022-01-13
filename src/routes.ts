import { IRoutes } from './models'
import { lazy } from 'react'
import AdminLayout from './components/Layout'
import AuthGuard from './guards/AuthGuard'
import GuestGuard from './guards/GuestGuard'

const LoginPage = lazy(() => import('./pages/Login'))
const DashboardPage = lazy(() => import('./pages/Dashboard'))
const ChangePasswordPage = lazy(() => import('./pages/ChangePass'))
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPass'))
// equipment
const ListEquipment = lazy(() => import('./pages/EquipmentPage/ListEquipment'))
const FormEquipment = lazy(() => import('./pages/EquipmentPage/FormEquipmentAction'))
const DetailEquipment = lazy(() => import('./pages/EquipmentPage/DetailEquipment'))
// service
const ListServicePage = lazy(() => import('./pages/ServicePage/ListService'))
const FormServicePage = lazy(() => import('./pages/ServicePage/FormServiceAction'))
const DetailServicePage = lazy(() => import('./pages/ServicePage/DetailService'))

//numberLevel
const NumberLevelPage = lazy(() => import('./pages/NumberLevelPage'))
//profile
const ProfilePage = lazy(() => import('./pages/ProfilePage'))
//report
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
    path: '/service',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: ListServicePage,
  },
  {
    path: '/service/add',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: FormServicePage,
  },
  {
    path: '/service/edit/:id',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: FormServicePage,
  },
  {
    path: '/service/detail/:id',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: DetailServicePage,
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

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
const ListNumberLevel = lazy(() => import('./pages/NumberLevelPage/ListNumberLevel'))
const FormNumberLevel = lazy(() => import('./pages/NumberLevelPage/FormNumberLevel'))
const DetailNumberLevel = lazy(() => import('./pages/NumberLevelPage/DetailNumberLevel'))

//profile
const ProfilePage = lazy(() => import('./pages/ProfilePage'))
//report
const ReportPage = lazy(() => import('./pages/ReportPage'))

//Setting
const RoleManager = lazy(() => import('./pages/SettingSystem/RoleManager/ListRole'))
const FormRole = lazy(() => import('./pages/SettingSystem/RoleManager/FormRole'))
const ListAccountUser = lazy(() => import('./pages/SettingSystem/AccountManager/ListAccountUser'))
const FromAccountUser = lazy(() => import('./pages/SettingSystem/AccountManager/FormAccountUser'))
const UserDiary = lazy(() => import('./pages/SettingSystem/UserDiary'))

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
    component: ListNumberLevel,
  },
  {
    path: '/level-number/add',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: FormNumberLevel,
  },
  {
    path: '/level-number/edit/:id',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: FormNumberLevel,
  },
  {
    path: '/level-number/detail/:id',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: DetailNumberLevel,
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
    path: '/setting-system/role',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: RoleManager,
  },
  {
    path: '/setting-system/role/add',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: FormRole,
  },
  {
    path: '/setting-system/role/:id',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: FormRole,
  },
  {
    path: '/setting-system/account',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: ListAccountUser,
  },
  {
    path: '/setting-system/account/add',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: FromAccountUser,
  },
  {
    path: '/setting-system/account/:id',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: FromAccountUser,
  },
  {
    path: '/setting-system/diary',
    exact: true,
    layout: AdminLayout,
    guard: AuthGuard,
    component: UserDiary,
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

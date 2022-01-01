import { FunctionComponent } from 'react'

export interface IRoutes {
  path: string
  exact?: boolean
  layout?: React.FunctionComponent
  guard: React.FunctionComponent
  component: React.LazyExoticComponent<FunctionComponent>
}

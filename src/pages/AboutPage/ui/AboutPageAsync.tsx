import { lazy } from 'react'

const AboutPage = lazy(() => import('./AboutPage'))

export const AboutPageAsync = () => {
  return <AboutPage />
}

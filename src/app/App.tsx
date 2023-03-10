import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import 'shared/config/i18n/i18n'
import { Suspense } from 'react'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'
import { BugButton } from './providers/errorBoundary'

export const App = () => {
  const { theme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
          <BugButton />
        </div>
      </Suspense>
    </div>
  )
}

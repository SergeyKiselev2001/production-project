import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {
  const { className, to, children, theme = AppLinkTheme.PRIMARY, ...other } = props


  return (
    <Link 
      { ...other }
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}>
      { children }
    </Link>
  )
}
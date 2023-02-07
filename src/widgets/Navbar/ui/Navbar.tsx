import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props


    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.empty} />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};
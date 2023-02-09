import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss'
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props
    const { t } = useTranslation('navbar')

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.empty} />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('О нас')}</AppLink>
            </div>
        </div>
    );
};
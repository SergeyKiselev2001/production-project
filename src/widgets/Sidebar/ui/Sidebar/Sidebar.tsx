import { useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => setCollapsed(!collapsed)

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/* lang */}
            </div>
        </div>
    );
};
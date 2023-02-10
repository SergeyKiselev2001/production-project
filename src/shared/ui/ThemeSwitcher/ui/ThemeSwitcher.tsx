import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { 
    className
  } = props

  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      { theme == Theme.DARK ? <DarkIcon /> : <LightIcon /> }
    </Button>
  )
}
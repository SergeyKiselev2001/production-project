import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "../Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={() => i18n.changeLanguage(i18n.language == "en" ? "ru" : "en")}
    >
      { t('язык') }
    </Button>
  );
};

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = ({ className = "", short = false }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  const enLang = "en";
  const ruLang = "ru";
  const onToggleLang = (): void => {
    void i18n.changeLanguage(i18n.language === enLang ? ruLang : enLang);
  };

  return (
      <Button
          onClick={onToggleLang}
          theme={ButtonTheme.CLEAR}
          className={classNames(cls.LangSwitcher, {}, [className])}
        >
          {short ? t("EN/RU") : t("Translate")}
      </Button>
  );
};

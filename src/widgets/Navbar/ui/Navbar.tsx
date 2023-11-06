import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = "" }: NavbarProps): JSX.Element => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onShowModal}
          >
              {t("Login")}
          </Button>
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal}></LoginModal>
      </div>
  );
};

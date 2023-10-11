/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useState, useCallback } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = "" }: NavbarProps): JSX.Element => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onToggleModal}
          >
              {t("Login")}
          </Button>
          <Modal isOpen={isAuthModal} onClose={onToggleModal}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nulla tenetur sed temporibus! Facere autem obcaecati maxime laborum fuga aliquam consequuntur, optio vero. Fuga maxime quo sint voluptatem accusamus labore.
          </Modal>
      </div>
  );
};

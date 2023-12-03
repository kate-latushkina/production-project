import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = "" }: NavbarProps): JSX.Element => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    setIsAuthModal(false);
  }, [dispatch]);

  if (authData) {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onLogout}
          >
                {t("Logout")}
            </Button>
        </div>
    );
  };

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onShowModal}
          >
              {t("Login")}
          </Button>
          {isAuthModal && <LoginModal
              isOpen={isAuthModal}
              onClose={onCloseModal}
          />}
      </div>
  );
};

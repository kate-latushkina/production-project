import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginModal.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { Suspense } from "react";
import { LoginFormLazy } from "../LoginForm/LoginForm.async";
import { Loader } from "shared/ui/Loader/Loader";

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className = "", isOpen, onClose }: LoginModalProps): JSX.Element => {
  return (
      <Modal
          className={classNames(cls.LoginModal, {}, [className])}
          isOpen={isOpen}
          onClose={onClose}
      >
          <Suspense fallback={<Loader />}>
              <LoginFormLazy onSuccess={onClose}></LoginFormLazy>
          </Suspense>
      </Modal>
  );
};

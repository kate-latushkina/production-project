/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { useCallback, type ReactNode, useState, useRef, useEffect } from "react";
import Portal from "../Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300;

export const Modal = ({
  className = "",
  children,
  isOpen,
  onClose,
  lazy
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
    return () => {
      setIsMounted(false);
    };
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose != null) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen != null) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy != null && !isMounted) {
    return null;
  }

  return (
      <Portal>
          <div className={classNames(cls.Modal, mods, [className, theme as string, "app_modal"])}>
              <div className={cls.overlay} onClick={closeHandler}>
                  <div
                      className={cls.content}
                      onClick={onContentClick}
                >
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  );
};

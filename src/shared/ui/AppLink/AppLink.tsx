import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, type LinkProps } from "react-router-dom";
import { type FC } from "react";

interface AppLinkProps extends LinkProps {
  className?: string
}

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, theme } = props;

  return (
      <Link to={to} className={classNames(cls.AppLink, {}, [className as string, cls[theme as string]])}>
          {children}
      </Link>
  );
};

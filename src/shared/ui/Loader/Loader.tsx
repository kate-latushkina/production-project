import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Loader.module.scss";

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps): JSX.Element => {
  return (
      <div className={classNames(cls.page__loader, {}, [className as string])}>
          <div className={classNames(cls["lds-roller"], {}, [className as string])}>
              <div/>
              <div/>
              <div/>
              <div/>
              <div/>
              <div/>
              <div/>
              <div/>
          </div>
      </div>
  );
};

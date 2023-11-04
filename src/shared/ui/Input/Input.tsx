import { classNames } from "shared/lib/classNames/classNames";
import React, { type InputHTMLAttributes, memo, useRef } from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className = "",
    value,
    onChange,
    type = "text",
    placeholder,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
  };

  return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
          {(placeholder != null) && (
          <label className={cls.placeholder}>
              {placeholder}
          </label>
          )}
          <input
              type={type}
              ref={ref}
              value={value}
              onChange={onChangeHandler}
              className={cls.input}
              {...otherProps}
                />
      </div>
  );
});

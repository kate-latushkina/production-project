import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModalLoader/DynamicModalLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm = memo(({ className = "", onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [onSuccess, dispatch, password, username]);

  return (
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
          <div className={classNames(cls.LoginForm, {}, [className])}>
              <Text title={t("Auth form")}/>
              {error && <Text title={t("Login_error")} theme={TextTheme.ERROR}/>}
              <Input
                  type="text"
                  className={cls.input}
                  placeholder={t("Username")}
                  onChange={onChangeUsername}
                  value={username}
            />
              <Input
                  type="text"
                  className={cls.input}
                  placeholder={t("Password")}
                  onChange={onChangePassword}
                  value={password}
            />
              <Button
                  theme={ButtonTheme.OUTLINE}
                  className={cls.loginBtn}
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={onLoginClick}
                  disabled={isLoading}
            >
                  {t("Login")}
              </Button>
          </div>
      </DynamicModuleLoader>
  );
});

export default LoginForm;

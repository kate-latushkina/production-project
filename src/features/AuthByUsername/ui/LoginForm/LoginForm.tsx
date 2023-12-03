import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModalLoader/DynamicModalLoader";

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm = memo(({ className = "" }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

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

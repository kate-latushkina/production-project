import { useTranslation } from "react-i18next";

const MainPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
      <div>
          {t("Main")}
      </div>
  );
};

export default MainPage;

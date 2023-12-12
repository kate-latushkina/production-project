import { Counter } from "entities/Counter";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo((): JSX.Element => {
  const { t } = useTranslation();

  return (
      <div>
          {t("Main")}
          <Counter/>
      </div>
  );
});

export default MainPage;

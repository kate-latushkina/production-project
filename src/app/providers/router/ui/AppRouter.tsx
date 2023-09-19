import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routerConfig";

const AppRouter = (): JSX.Element => {
  const { t } = useTranslation();

  return (
      <Suspense fallback={<div>{t("Loading")}</div>}>
          <div className='page-wrapper'>
              <Routes>
                  {Object.values(routeConfig).map(({ element, path }) => (
                      <Route
                          key={path}
                          path={path}
                          element={element}
                    />
                  ))}
              </Routes>
          </div>
      </Suspense>
  );
};

export default AppRouter;

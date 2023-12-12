import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModalLoader/DynamicModalLoader";
import { profileReducer } from "entities/Profile";

const initialReducers: ReducersList = {
  profile: profileReducer
};

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className = "" }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
          <div className={classNames("", {}, [className])}>
              {t("Profile")}
          </div>
      </DynamicModuleLoader>
  );
};

export default ProfilePage;

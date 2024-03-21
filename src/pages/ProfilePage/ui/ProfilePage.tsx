import { classNames } from "shared/lib/classNames/classNames";
// import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModalLoader/DynamicModalLoader";
import { ProfileCard, fetchProfileData, profileReducer } from "entities/Profile";
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const initialReducers: ReducersList = {
  profile: profileReducer
};

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className = "" }: ProfilePageProps) => {
  // const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

  return (
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
          <div className={classNames("", {}, [className])}>
              <ProfileCard />
          </div>
      </DynamicModuleLoader>
  );
};

export default ProfilePage;

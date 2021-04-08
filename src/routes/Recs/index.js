import { CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProfileCard from "../../components/ProfileCard";
import Side from "../../components/Side";

import { selectCurrentProfile } from "../../store/profiles/currentProfile";
import {
  getProfilesAsync,
  selectProfilesData,
  selectProfilesLoading,
} from "../../store/profiles/profiles";

import s from "./style.module.css";

const RecsPage = () => {
  const dispatch = useDispatch();
  const profiles = useSelector(selectProfilesData);
  const isLoading = useSelector(selectProfilesLoading);
  const currentProfile = useSelector(selectCurrentProfile);

  const getProfiles = () => {
    dispatch(getProfilesAsync());
  };

  useEffect(() => {
    getProfiles();
  }, []);
  return (
    <div className={s.flex}>
      <Side />
      <div className={s.content}>
        {isLoading ? (
          <CircularProgress />
        ) : profiles.length > 0 ? (
          <ProfileCard name={profiles[currentProfile].firstName} />
        ) : (
          <>
            <h1>Пока нет новых профилей</h1>
            <span onClick={() => getProfiles()}>Обновить</span>
          </>
        )}
      </div>
    </div>
  );
};

export default RecsPage;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProfileCard from "../../components/ProfileCard";
import Side from "../../components/Side";

import { selectCurrentProfile } from "../../store/profiles/currentProfile";
import {
  getProfilesAsync,
  selectProfilesData,
} from "../../store/profiles/profiles";

import s from "./style.module.css";

const RecsPage = () => {
  const dispatch = useDispatch();
  const profiles = useSelector(selectProfilesData);
  const currentProfile = useSelector(selectCurrentProfile);

  useEffect(() => {
    dispatch(getProfilesAsync());
  }, []);
  return (
    <div className={s.flex}>
      <Side />
      <div className={s.content}>
        {profiles.length > 0 ? (
          <ProfileCard
            name={profiles[currentProfile].firstName}
            photo={profiles[currentProfile].photos[0].photo}
          />
        ) : null}
      </div>
    </div>
  );
};

export default RecsPage;

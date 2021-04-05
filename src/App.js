import Side from "./components/Side";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { selectCurrentProfile } from "./store/profiles/currentProfile";
import {
  getProfilesAsync,
  selectProfilesData,
} from "./store/profiles/profiles";

import s from "./style.module.css";

const App = () => {
  const dispatch = useDispatch();
  const profiles = useSelector(selectProfilesData);
  const currentProfile = useSelector(selectCurrentProfile);

  useEffect(() => {
    dispatch(getProfilesAsync());
  }, []);
  //console.log(profiles[currentProfile]);
  return (
    <>
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
      <Footer />
    </>
  );
};

export default App;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import {
  getCurrentProfileAsync,
  selectCurrentProfileData,
  selectCurrentProfileError,
} from "../../store/profiles/currentProfile";

import Header from "./Header";
import Menu from "./Menu";
import Messages from "./Messages";
import s from "./style.module.css";

const Side = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(selectCurrentProfileData);
  const error = useSelector(selectCurrentProfileError);

  const history = useHistory();

  useEffect(() => {
    dispatch(getCurrentProfileAsync());
  }, []);

  useEffect(() => {
    if (error === 401) {
      sessionStorage.removeItem("idToken");
      history.push("/");
    }
  }, [error]);

  return (
    <div className={s.side}>
      <Header
        name={userProfile && userProfile.firstName}
        img={userProfile.photos && userProfile.photos[0].path}
      />
      <Menu />
      <Messages />
    </div>
  );
};

export default Side;

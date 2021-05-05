import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { startConversation } from "../../services/API";

import {
  getCurrentProfileAsync,
  selectCurrentProfileData,
  selectCurrentProfileError,
  logout,
} from "../../store/profiles/currentProfile";

import Header from "./Header";
import Matches from "./Matches";
import Menu from "./Menu";
import Messages from "./Messages";
import s from "./style.module.css";

const Side = () => {
  const dispatch = useDispatch();

  const userProfile = useSelector(selectCurrentProfileData);
  const error = useSelector(selectCurrentProfileError);

  const [conversations, setConversations] = useState([]);
  const [matches, setMatches] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Messages");

  const history = useHistory();

  const handleClickLogout = () => {
    logoutPage();
  };
  const handleClickMenuItem = (item) => {
    setSelectedMenuItem(item);
  };
  const handleClickMatchBlock = (id) => {
    startConversation(id)
      .then((response) => {
        console.log("id", id);
      })
      .catch((error) => {
        console.log("error", error);
      });
    history.push("/dialog");
  };

  useEffect(() => {
    dispatch(getCurrentProfileAsync());
  }, []);

  useEffect(() => {
    if (userProfile.conversations) {
      getConversations();
      getMatches();
    }
  }, [userProfile]);

  useEffect(() => {
    if (error === 401) {
      logoutPage();
    }
  }, [error]);

  const getConversations = () => {
    const conversations = userProfile.conversations
      .map((item) => item.conversation)
      .filter((c) => c.isStarted === true);
    setConversations(conversations);
  };

  const getMatches = () => {
    const matches = userProfile.conversations
      .map((item) => item.conversation)
      .filter((c) => c.isStarted === false);
    setMatches(matches);
    console.log(matches);
  };

  const logoutPage = () => {
    dispatch(logout());
    sessionStorage.removeItem("idToken");
    history.push("/");
  };

  return (
    <div className={s.side}>
      <Header
        name={userProfile && userProfile.firstName}
        img={userProfile.photos && userProfile.photos[0].path}
        onClickLogout={handleClickLogout}
      />
      <Menu
        onClickMenuItem={handleClickMenuItem}
        selectedMenuItem={selectedMenuItem}
      />
      {selectedMenuItem === "Messages" ? (
        <Messages messages={conversations} />
      ) : (
        <Matches matches={matches} onClickMatchBlock={handleClickMatchBlock} />
      )}
    </div>
  );
};

export default Side;

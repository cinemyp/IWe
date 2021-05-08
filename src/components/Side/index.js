import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { startConversation } from "../../services/API";
import {
  selectCurrentDialogDataId,
  setConversationId,
} from "../../store/dialog/dialog";

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
  const dialogId = useSelector(selectCurrentDialogDataId);

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
        openDialog(id);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleClickConversationBlock = (id) => {
    openDialog(id);
  };

  const openDialog = (id) => {
    dispatch(setConversationId({ id: id }));
    history.push("/recs/dialog");
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
        <Messages
          messages={conversations}
          onClickMessageBlock={handleClickConversationBlock}
          openedDialog={dialogId}
        />
      ) : (
        <Matches matches={matches} onClickMatchBlock={handleClickMatchBlock} />
      )}
    </div>
  );
};

export default Side;

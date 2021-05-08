import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TinderCard from "react-tinder-card";

import { likeUser } from "../../services/API";
import { setEmpty } from "../../store/dialog/dialog";
import { selectCurrentProfileData } from "../../store/profiles/currentProfile";

import {
  getProfilesAsync,
  selectProfilesData,
  selectProfilesLoading,
} from "../../store/profiles/profiles";

import s from "./style.module.css";

const alreadyRemoved = [];

const RecsPage = () => {
  const dispatch = useDispatch();
  const currentProfile = useSelector(selectCurrentProfileData);
  const profiles = useSelector(selectProfilesData);
  const isLoading = useSelector(selectProfilesLoading);

  const [profilesNum, setProfilesNum] = useState(0);

  const handleCardLeftScreen = () => {
    setProfilesNum((prevState) => prevState - 1);
  };

  const childRefs = [];

  const getProfiles = () => {
    dispatch(getProfilesAsync());
  };

  const swiped = (idToDelete) => {
    console.log("removing: " + idToDelete);
    alreadyRemoved.push(idToDelete);
  };

  const swipe = (dir) => {
    const cardsLeft = profiles.filter(
      (person) => !alreadyRemoved.includes(person.id)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].id; // Find the card object to be removed
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[toBeRemoved].swipe(dir); // Swipe the card!

      const likeData = {
        userId: currentProfile.id,
        likedUserId: toBeRemoved,
      };

      switch (dir) {
        case "right":
          likeUser(likeData);
          break;
      }
    }
  };
  useEffect(() => {
    dispatch(setEmpty());
  }, []);
  useEffect(() => {
    if (currentProfile.email) {
      getProfiles();
    }
  }, [currentProfile]);

  useEffect(() => {
    setProfilesNum(profiles.length);
  }, [profiles]);

  return (
    <div className={s.content}>
      <div className={s.cardContainer}>
        {isLoading ? (
          <CircularProgress />
        ) : profilesNum > 0 ? (
          profiles.map((profile) => (
            <TinderCard
              className={s.swipe}
              key={profile.id}
              ref={(input) => {
                childRefs[profile.id] = input;
              }}
              onSwipe={() => {
                swiped(profile.id);
              }}
              onCardLeftScreen={handleCardLeftScreen}
            >
              <div
                style={{
                  backgroundImage: "url(" + profile.photos[0].path + ")",
                }}
                className={s.card}
              >
                <h3>{profile.firstName}</h3>
              </div>
            </TinderCard>
          ))
        ) : (
          <>
            <h1>Пока нет новых профилей</h1>
            <span onClick={() => getProfiles()}>Обновить</span>
          </>
        )}
      </div>
      {isLoading || profilesNum === 0 ? null : (
        <div className={s.buttons}>
          <button onClick={() => swipe("left")}>Swipe left!</button>
          <button onClick={() => swipe("right")}>Swipe right!</button>
        </div>
      )}
    </div>
  );
};

export default RecsPage;

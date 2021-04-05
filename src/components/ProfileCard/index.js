import { useDispatch } from "react-redux";
import { changeProfile } from "../../store/profiles/currentProfile";
import s from "./style.module.css";

const handleClickYes = (dispatch) => {
  dispatch(changeProfile());
};
const handleClickNo = (dispatch) => {
  dispatch(changeProfile());
};

const ProfileCard = ({ name, photo }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.card}>
      <div className={s.user}>
        <img
          className={s.user}
          src={"data:image/png;base64," + photo}
          alt="Profile Photo"
        />
        <div className={s.profile}>
          <div className={s.name}>{name}</div>
        </div>
      </div>
      <div className={s.buttons}>
        <button className={s.no} onClick={() => handleClickNo(dispatch)}>
          <i className="fas fa-times"></i>
        </button>
        <button className={s.heart} onClick={() => handleClickYes(dispatch)}>
          <i className="fas fa-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;

import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import Input from "../Input";
import s from "./style.module.css";

const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [gender, setGender] = useState(1);
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("2021-01-01");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit &&
      onSubmit({
        name,
        email,
        password,
        avatar,
        gender,
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.flex}>
        <div className={s.column}>
          <div className={s.field}>
            <TextField
              label="Имя"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={s.field}>
            <TextField
              label="Электронная почта"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={s.field}>
            <TextField
              label="Пароль"
              value={password}
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={s.wrap}>
            <Button type="submit" size="large">
              SIGN UP
            </Button>
          </div>
        </div>
        <div className={s.column}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Пол</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={(e) => {
                setGender(Number(e.target.value));
              }}
            >
              <FormControlLabel value={2} control={<Radio />} label="Женщина" />
              <FormControlLabel value={1} control={<Radio />} label="Мужчина" />
            </RadioGroup>
          </FormControl>

          <div className={s.field}>
            <TextField
              label="Дата рождения"
              value={date}
              type="date"
              name="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
          </div>
          <div className={s.field}>
            <input
              accept="image/*"
              id="avatar"
              type="file"
              onChange={(e) => {
                setAvatar(URL.createObjectURL(e.target.files[0]));
              }}
            />

            <label htmlFor="avatar">
              <div className={s.avatar}>
                <FormLabel>Аватар</FormLabel>
                <img src={avatar} />
              </div>
              <Button variant="contained" component="span">
                Загрузить
              </Button>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;

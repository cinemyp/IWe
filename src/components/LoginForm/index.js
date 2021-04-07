import { useState } from "react";
import Input from "../Input";
import s from "./style.module.css";

const LOGIN = "Log in?";
const REGISTER = "Register?";

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("Register?");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit &&
      onSubmit({
        username,
        password,
        auth: auth === REGISTER ? "log" : "reg",
      });
  };

  const onClickChangeAuth = () => {
    if (auth === REGISTER) setAuth(LOGIN);
    else if (auth === LOGIN) setAuth(REGISTER);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          label="Username"
          value={username}
          type="text"
          name="emausernameil"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <Input
          label="Password"
          value={password}
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className={s.wrap}>
        <button>{auth === REGISTER ? "SIGN IN" : "SIGN UP"}</button>
        <div className={s.auth} onClick={onClickChangeAuth}>
          {auth}
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

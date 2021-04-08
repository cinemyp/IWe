import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit &&
      onSubmit({
        email,
        password,
      });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <div>
        <TextField
          value={email}
          label="Email"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
      </div>
      <div>
        <TextField
          value={password}
          label="Password"
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
      </div>
      <div className={s.wrap}>
        <Button type="submit" size="large">
          SIGN IN
        </Button>
        <div className={s.auth}>
          <Link to="/register">Register?</Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

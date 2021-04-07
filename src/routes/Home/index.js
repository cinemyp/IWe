import LoginForm from "../../components/LoginForm";

import s from "./style.module.css";

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <LoginForm />
    </div>
  );
};

export default HomePage;

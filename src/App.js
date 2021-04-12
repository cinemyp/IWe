import { Redirect, Route, Switch } from "react-router";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import RecsPage from "./routes/Recs";
import NotFoundPage from "./routes/NotFound";
import LoginPage from "./routes/Login";
import RegisterPage from "./routes/Register";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/404" component={NotFoundPage} />
        <Route path="/" exact component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute path="/recs" component={RecsPage} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
      <Footer />
      <NotificationContainer />
    </>
  );
};

export default App;

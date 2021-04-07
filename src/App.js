import { Redirect, Route, Switch } from "react-router";
import Footer from "./components/Footer";
import HomePage from "./routes/Home";
import RecsPage from "./routes/Recs";
import NotFoundPage from "./routes/NotFound";

const App = () => {
  return (
    <Switch>
      <Route path="/404" component={NotFoundPage} />
      <Route path="/" exact component={HomePage} />
      <Route path="/recs" component={RecsPage} />
      <Route render={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default App;

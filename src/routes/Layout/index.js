import RecsPage from "../Recs";
import Layout from "../../components/Layout";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import PrivateRoute from "../../components/PrivateRoute";
import DialogPage from "../Dialog";

const LayoutPage = () => {
  const routeMatch = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <PrivateRoute exact path={`${routeMatch.path}/`} component={RecsPage} />
        <PrivateRoute
          path={`${routeMatch.path}/dialog`}
          component={DialogPage}
        />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </Layout>
  );
};
export default LayoutPage;

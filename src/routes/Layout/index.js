import RecsPage from "../Recs";
import Layout from "../../components/Layout";

const LayoutPage = () => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute path="/recs" component={RecsPage} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </Layout>
  );
};
export default LayoutPage;

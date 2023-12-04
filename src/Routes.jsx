import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import HomePage from "./pages/Home";
import ImagePage from "./pages/Image";
import SearchPage from "./pages/Search";
import SignUpForm from "./components/sign_up_form/SignUpForm";

const CustomRoutes = () => {
  const routes = [
    { path: "/", component: <HomePage />, exact: true },
    { path: "/:id", component: <ImagePage /> ,exact: true},
    { path: "/search/:id", component: <SearchPage/>},
    { path: "/sign_up", component: <SignUpForm/>, exact: true}
  ];

  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} exact={route.exact} path={route.path}>
          {route.component}
        </Route>
      ))}
    </Switch>
  );
};

export default CustomRoutes;

import { Route, Switch } from "react-router";
// store //
import perfumeStore from "../stores/perfumeStore";

// components //
import PerfumeList from "./PerfumeList";
import ShopList from "./ShopList";
import PerfumeDetail from "./PerfumeDetail";
import ShopDetail from "./ShopDetail";
import Home from "./Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/perfumes/:perfumeSlug">
        <PerfumeDetail />
      </Route>
      <Route path="/perfumes">
        <PerfumeList perfumes={perfumeStore.perfumes} />
      </Route>
      <Route path="/shops/:shopSlug">
        <ShopDetail />
      </Route>
      <Route path="/shops">
        <ShopList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;

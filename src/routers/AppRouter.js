import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { CharacterDetail } from "../pages/characters/CharacterDetail";
import { CharacterList } from "../pages/characters/CharacterList";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route
            component={CharacterDetail}
            exact
            path="/characters/:characterId"
          />
          <Route component={CharacterList} exact path="/characters" />
          <Redirect to="/characters" />
        </Switch>
      </div>
    </Router>
  );
};

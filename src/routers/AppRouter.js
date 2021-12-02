import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CharacterList } from "../pages/characters/CharacterList";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route component={CharacterList} exact path="/characters" />
        </Switch>
      </div>
    </Router>
  );
};

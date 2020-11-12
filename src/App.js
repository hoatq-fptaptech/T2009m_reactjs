import Header from "./Header";
import Main from "./Main";
import Category from "./Category";
import Detail from "./Detail";
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route exact path="/category">
                    <Category/>
                </Route>
                <Route exact path="/detail">
                    <Detail/>
                </Route>
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;

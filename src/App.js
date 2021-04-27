
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';  
import Create from './pages/Create';
import Blogdetail from './pages/Blogdetail';
//npx json-server --watch exampledata/data.json --port 1234
//coba bikin req api, dari file json
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:idBlog">
              <Blogdetail/>
            </Route>
            <Route path="*">
              <Notfound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

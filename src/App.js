import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AddLecturePage from "./components/AddLecturePage";
import LecturePage from "./components/LecturePage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch className='App'>
                    <Route exact path='/' render={() => <AddLecturePage />} />
                    <Route exact path='/lecture' render={() => <LecturePage />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AddLecturePage from "./components/AddLecturePage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch className='App'>
                    <Route exact path='/' render={() => <AddLecturePage />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;

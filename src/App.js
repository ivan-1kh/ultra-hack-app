import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AddLecturePage from "./components/AddLecturePage";
import LecturePage from "./components/LecturePage";
import HomePage from "./components/HomePage";
import UploadPage from "./components/UploadPage";
import UploadingPage from "./components/UploadingPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch className='App'>
                    <Route exact path='/' render={() => <HomePage />} />
                    <Route exact path='/lecture' render={() => <LecturePage />} />
                    <Route exact path='/addlecture' render={() => <AddLecturePage />} />
                    <Route exact path='/upload' render={() => <UploadPage />} />
                    <Route exact path='/uploading' render={() => <UploadingPage />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;

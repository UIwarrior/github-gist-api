import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Home from "./components/home/home";
import reducers from "./redux/reducers";
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);


class App extends React.Component {
    render () {
        return (
            <Provider store ={store}>
                <Home/>
            </Provider>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));

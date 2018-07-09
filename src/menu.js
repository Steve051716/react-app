import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Game from "./game";
import Calculate from "./calculate";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Menu</h1>
                    <ul className="header">
                        <li><a href="/">Home</a></li>
                        <li><a href="/Game">Game</a></li>
                        <li><a href="/Calculate">Calculate</a></li>
                    </ul>
                    <div className="content">

                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
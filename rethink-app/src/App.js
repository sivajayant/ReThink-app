import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/table";
import CustomURL from "./components/customUrl";
import NavBar from "./components/navbar";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/table" component={Table} />
          <Route path="/customurl" component={CustomURL} />
          <Redirect from="/" exact to="/table" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

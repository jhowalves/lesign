import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from '../src/pages/Home';
import { Company } from '../src/pages/Company';
import { Contact } from '../src/pages/Contact';

export function Routes() {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/company" exact component={Company}/>
        <Route path="/contact" exact component={Contact}/>
      </Switch>
    </Router>
  )
}
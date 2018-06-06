import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './Main.css';
import ContactsView from '../../components/ContactsView/ContactsView';
import DetailsView from '../../components/DetailsView/DetailsView';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="main-view">
          <Switch>
            <Redirect from="/" exact to="/contacts/1" />
            <Redirect from="/contacts" exact to="/contacts/1" />
            <Route
              path="/contacts/:page"
              render={
                ({ match }) => <ContactsView page={match.params.page} />
              }
            />
            <Route
              path="/profile/:userId"
              render={
                ({ match }) => <DetailsView userId={match.params.userId} />
              }
            />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default Main;

import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Service from './service/Auth.service'

/* CUSTOM UI COMPONENTS */
import Navbar from './components/ui/Navbar'

/* CUSTOM PAGE COMPONENTS */
import Index from './components/pages/Index'
import PlayersList from './components/players/players-list'
import PlayersForm from './components/players/players-form'
import PlayerEdit from './components/players/player-edit'
import MatchsList from './components/matchs/matchs-list'
import MatchsForm from './components/matchs/matchs-form'
import MatchsEdit from './components/matchs/match-edit'
import PlayersMatch from "./components/matchs/players-match"
import MatchPlayers from "./components/matchs/match-players"
/* CUSTOM AUTH COMPONENTS */
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'



class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this._service = new Service()
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user })
    console.log("El método 'setTheUser' de App.js se ha invocado, pasando al estado 'User:", this.state.loggedInUser)
  }

  fetchUser = () => {

    if (this.state.loggedInUser === null) {
      this._service.loggedin()
        .then(theLoggedInUserFromTheServer => this.setState({ loggedInUser: theLoggedInUserFromTheServer.data }))
        .catch(err => {
          this.setState({ loggedInUser: false })
          console.log({ err })
        })
    }
  }


  render() {

    this.fetchUser()
    return (
      <>
        <Navbar loggedInUser={this.state.loggedInUser} setUser={this.setTheUser} />

        <Switch>
          <Route exact path="/" component={Index} />


          <Route path="/signup" render={match => <Signup setUser={this.setTheUser} {...match} />} />
          <Route path="/login" render={match => <Login setUser={this.setTheUser} {...match} />} />
          {/* RUTAS DE PLAYERS */}
          <Route exact path="/formPlayers" component={PlayersForm} />
          <Route path="/players" render={() => this.state.loggedInUser ? <PlayersList loggedInUser={this.state.loggedInUser} /> : null} />

          {/* RUTAS DE PARTIDOS */}
          <Route exact path="/formMatchs" component={MatchsForm} />
          <Route path="/match" render={match => this.state.loggedInUser ? <MatchsList {...match} loggedInUser={this.state.loggedInUser} /> : null} />
          <Route path="/playersMatch/:id" render={match => this.state.loggedInUser ? <PlayersMatch {...match} loggedInUser={this.state.loggedInUser} /> : null} />
          <Route path="/matchPlayers/:id" render={match => this.state.loggedInUser ? <MatchPlayers {...match} loggedInUser={this.state.loggedInUser} /> : null} />


        </Switch>

      </>

    )
  }
}

export default App;

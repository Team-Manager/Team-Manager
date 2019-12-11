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
    console.log("El método 'setTheUser' de App.js se ha invocado, pasando al estado 'loggedInUser:", this.state.loggedInUser)
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
    console.log(this.state.loggedInUser)
    return (
      <>
        <Navbar loggedInUser={this.state.loggedInUser} setUser={this.setTheUser} />

        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/form" component={PlayersForm}/>

          <Route path="/signup" render={match => <Signup setUser={this.setTheUser} {...match} />} />
          <Route path="/login" render={match => <Login setUser={this.setTheUser} {...match} />} />
          <Route path="/players" render={() =>
            // this.state.loggedInUser && <Profile loggedInUser={this.state.loggedInUser} />
            this.state.loggedInUser ? <PlayersList loggedInUser={this.state.loggedInUser} /> : null
          } />
          <Route path="/players" render={() =>
            // this.state.loggedInUser && <Profile loggedInUser={this.state.loggedInUser} />
            this.state.loggedInUser ? <PlayerEdit loggedInUser={this.state.loggedInUser} /> : null
          }   />
          
        </Switch>

      </>

    )
  }
}

export default App;

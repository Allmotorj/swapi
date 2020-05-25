import React, { Component } from 'react';
import './App.css';
import getAllStarships from './services/sw-api';
import StarshipPage from './components/StarshipPage';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    starships: []
  }

  getStarship = (idx) => {
    return this.state.starships[idx]
  }

  async componentDidMount() {
    const allStarships = await getAllStarships();
    this.setState({
      starships: allStarships
    })
  }

  render() {
    return(
      <div className='App'>
        <header className='App-header'>STAR WARS STARSHIPS</header>
        <Switch>
          <Route exact path="/" render={() => {
            return(
              <section>
                {
                  this.state.starships ? this.state.starships.map((ship, idx) => {
                    return (
                      <Link 
                        to={`/starships/${idx}`} 
                        key={ship.name}
                      >
                        {ship.name}
                      </Link>
                                    
                    )
                  }) : null
                }
              </section>
            )
          }}/>
          <Route path="/starships/:idx" render={(props) => 
            <StarshipPage {...props} getStarship={this.getStarship} />
          }/>
        </Switch>
      </div>
    )
  }
}


export default App;
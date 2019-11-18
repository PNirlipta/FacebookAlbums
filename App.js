import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Albums from './Albums';
import FacebookLoginButton from './LoginComponent';

class App extends Component {
constructor(){
  super();
  this.state = {
    username: null
  };
}  

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      //alert('Facebook login error');
    }
  }

  fetchAlbums(response){
    this.setState({
      ...this.state,
      albums: response
    });                
  }

  render() {
    const { username } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Facebook Albums Login</h1>
        </header>

        <div className="App-intro">
          {!username &&
            <div>
              <p>Click on the button below to login</p>
              <FacebookLoginButton onLogin={this.onFacebookLogin}>
                <button>Log In</button>
              </FacebookLoginButton>
            </div>
          }
          {username &&
            <div>
              <p>Welcome back, {username}</p>
              <ul>
                {/* <li>
                  <Link to="/">Log Out</Link>
                </li> */}
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  {/* <button >Fetch Albums</button> */}
                  <Albums fetchAlbums={this.fetchAlbums.bind(this)}>
                    <Link to="/albums">Albums</Link>
                  </Albums>
                </li>
              </ul>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
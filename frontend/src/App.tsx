import { Component } from 'react';
import { MyContextProvider } from './context/GitHubUserContext';
import Main from './components/main';
import './App.css';

class App extends Component {

  render() {
    return (
      <MyContextProvider>
        <div className="App">
          <h1>Search GitHub Repositories by User</h1>
          <Main />
        </div>
      </MyContextProvider>
    )
  }
}

export default App;

import './App.css';

import { useEffect, useState } from 'react';
import { Loader, Notes } from './components';
import { Login } from './views';
import * as API from './common/API/API'

function App() {
  const [userState, setuserState] = useState('anonymous');
  const [notes, setnotes] = useState([]);
  const [loading, setloading] = useState(true);
  const loggedIn = () => {
    API.State().then(async (res) => {
      setuserState(res.result.state);
      API.Notes().then(async (res) => {
        setnotes(res.result);
      });
    });
  }

  useEffect(() => {
    API.State().then(async (res) => {
      setuserState(res.result.state);
      if(res.result.state === 'verified'){
        API.Notes().then(async (res) => {
          setnotes(res.result);
          setloading(false);
        });
      }
      else{
        setloading(false);
      }
    }).catch(error => {
      alert('error connecting to server')
      setloading(false);
    });
    return () => {
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{userState}</p>
        {loading
          ?
          <Loader />
          :
          userState === 'anonymous' && <Login loggedin={loggedIn} />
        }
        {notes && <Notes notes={notes}/>}
      </header>
    </div>
  );
}

export default App;

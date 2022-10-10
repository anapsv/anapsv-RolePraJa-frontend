import './assets/reset.css';
import './assets/globalStyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './context/UserContext';
import Login from './pages/SignIn';
import Register from './pages/Register';
import Feed from './pages/Feed';
import Places from './components/Places';

function App() {

  const [token, setToken] = useState("");
  const contextValue = { token, setToken };

  return (
    <UserContext.Provider value={ contextValue }>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={ <Login /> } />
          <Route path='/signup' element={ <Register /> } />
          <Route path='/' element={ <Feed /> } >
            <Route path='locations' element={ <Places /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

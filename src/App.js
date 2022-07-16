import { BrowserRouter, Link } from 'react-router-dom'
import { Provider } from 'react-redux'

import './App.css';
import { HomeRouter } from './containers/HomeRouter';
import { store } from './rdx';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <div className='Header'>
            <Link to={'/'} className={'LinkItem'}>List</Link>
            <Link to={'add'} className={'LinkItem'}>Add New</Link>
          </div>
          <HomeRouter />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

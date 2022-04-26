import './App.css';
import MainComponent from './components/mainComponent';
import myStore from './components/redux/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <div className="App">
      <Provider store={myStore}>
        <MainComponent />
      </Provider>

    </div>
  );
}

export default App;

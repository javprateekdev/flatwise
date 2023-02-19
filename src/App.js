import logo from './logo.svg';
import './App.css';
import Bar from './Bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import View from './View';
import store from './store/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Bar/>
      <View/>
      </Provider>

    </div>
  );
}

export default App;

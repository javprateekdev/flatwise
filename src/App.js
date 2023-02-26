import logo from './logo.svg';
import './App.css';
import Bar from './Bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import View2 from './View2';
import store from './store/store';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Provider store={store}>
      <Bar/>
      <View2 />
      </Provider>

    </div>
  );
}

export default App;

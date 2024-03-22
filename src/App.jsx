import './App.css';
import Button from './components/Button/Button';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Homework31 from './homeworks/Homework31/Homework31';
import Lesson18 from './lessons/Lesson18/Lesson18';
import { Provider } from 'react-redux';
import store from './components/Feedback/store.ts';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Homework31 />
      </Provider>
    </div>
  );
}

export default App;

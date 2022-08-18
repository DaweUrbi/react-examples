import { Provider } from 'react-redux';
import './App.css';
// import Buttons from './Components/Buttons/Buttons';
// import FifaTourney from './Components/FifaTourney/FifaTourney';
// import Context from './Components/Context/Context';
// import CartExercise from './Components/CartExercise/CartExercise';
// import CartClassExercise from './Components/CartClassExercise/CartClassExercise';
import store from './Components/TodoRedux/app/store';
import Todo from './Components/TodoRedux/Todo';

function App() {
  return (
    <div className='App'>
      {/* <Context /> */}
      {/* <CartExercise /> */}
      {/* <Buttons /> */}
      {/* <FifaTourney /> */}
      {/* <Class /> */}
      {/* <CartClassExercise /> */}
      <Provider store={store}>
        {/* <Redux /> */}
        <Todo />
      </Provider>
    </div>
  );
}

export default App;

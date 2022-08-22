import { Provider } from 'react-redux';
import './App.css';
// import Buttons from './Components/Buttons/Buttons';
// import FifaTourney from './Components/FifaTourney/FifaTourney';
// import Context from './Components/Context/Context';
// import CartExercise from './Components/CartExercise/CartExercise';
// import CartClassExercise from './Components/CartClassExercise/CartClassExercise';
// import Todo from './Components/TodoRedux/Todo';
// import store from './Components/TodoRedux/app/store';
import BlogPosts from './Components/BlogPosts/BlogPosts';
import store from './Components/BlogPosts/app/store';

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
        {/* <Todo /> */}
        <BlogPosts />
      </Provider>
    </div>
  );
}

export default App;

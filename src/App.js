import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <div className="App">
        <div className="text-5xl mt-10">TodoList</div>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;

import './App.css';
import Accordion from './components/Accordion';
import Chat from './components/Chat';
import Form from './components/Form';
import Names from './components/Names';
import Structure from './components/Structure';
import Structure2 from './components/Structure2';
import Task from './components/Task';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* import our form component handling reactint to input with state */}
       <Form />

       {/* state structure */}
       <Names />

       {/* share state between components */}

       <Accordion />

       {/* preserving and resetting state */}
       <Chat />

       {/* extracting state logic to reducer */}
       {/* <Todo /> */}
       <Task />

        {/* passing data deeply with context */}
       <Structure />

        <Structure2 />
      </header>
    </div>
  );
}

export default App;

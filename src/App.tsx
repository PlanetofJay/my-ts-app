import Task from "./components/Task";

function App() {

  return (
    <div>
      <Task 
        id={1}
        description='My first task'
        done={true}
      />

      <Task
        id={2}
        description='My second task'
        done={true}
      />
      <Task
        id={3}
        description='My third tasks'
        done={false}
      />
    </div>
  );
}

export default App;

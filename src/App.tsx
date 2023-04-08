import { useEffect, useState } from "react";
import Task from "./components/Task";
import { ITask } from "./interfaces";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  // Load the tasks.
  useEffect(() => { 
    const loadedTasks: ITask[] = [
      {
        id: 1,
        description: 'My first task',
        done: true,
      },
      {
        id: 2,
        description: 'My second task',
        done: false
      }
    ];
    setTasks(loadedTasks);
  }, []);

  return (
    <div>
      {tasks.map((task: ITask) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          done={task.done}
        />
      ))}
    </div>
  );
}

export default App;

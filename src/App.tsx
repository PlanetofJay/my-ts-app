function App() {

  interface ITask {
    id: number,
    description: string,
    done?: boolean
  }

  const task :ITask = {
    id: 1,
    description: 'My single task',
    done: false
  }

  const tasks: ITask[] = [
    {
      id: 2,
      description: 'My first task',
      done: false
    },
    {
      id: 3,
      description: 'My second task',
      done: true
    },
    {
      id: 4,
      description: 'My third task',
      done: false
    }
  ];

  /**
   * Object used for creating a sending domain.
   */
  interface ISendingDomain {
    /** The domain you are sending from. */
    domain: string,
    tracking_domain?: string,
    dkim?: {
      signing_domain?: string,
      private: string,
      public: string,
      selector: string,
      headers?: string
    }
  }

  let sendingDomain: ISendingDomain;


  return (
    <div>
      <div>{task.id}</div>
      <div>{task.description}</div>
      <div>{task.done}</div>
      <div></div>
    </div>
  );
}

export default App;

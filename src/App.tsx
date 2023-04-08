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
    /** Associated tracking domain. */
    tracking_domain?: string,
    /** Object in which DKIM key configuration is defined. */
    dkim?: IDKIM
  }

  interface IDKIM {
    /** Value used as the Signing Domain Identifier (SDID). */
    signing_domain?: string,
    private: string,
    public: string,
    selector: string,
    headers?: string
  }

  /**
   * Used for registering a new device
   * to one of your OneSignal apps.
   */
  interface IAddDevice {
    /** Your OneSignal App Id found in Keys & IDs */
    app_id: string,
    /** The device's platform. */
    device_type: number
  }

  let addDevice: IAddDevice;

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

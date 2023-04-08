import { ITask } from "../../interfaces";

export default function Task({ id, description, done }: ITask) {
  const status: string = done
    ? 'Completed'
    : 'Open';

    return (
      <div>
        <h2>{description}</h2>
        <div>Id: {id}</div>
        <div>Status: {status}</div>
      </div>
    )
}
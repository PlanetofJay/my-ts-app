interface IStatus {
  id: string,
  /** A label for the status. */
  text: string
}

export const statuses: IStatus[];
export function getStatus(id: string): IStatus | undefined;

export const statuses = [
  { id: 'd', text: 'Draft' },
  { id: 'p', text: 'Published' },
  { id: 'a', text: 'Archived' }  
];

export function getStatus(id) {
  const item = statuses.find(
    (status) => status.id === id
  );
  return item;
}
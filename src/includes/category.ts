
export const categories = [
  { id: 'edu', text: 'Education' },
  { id: 'ent', text: 'Entertainment' },
  { id: 'oth', text: 'Other' }  
];

export function getCategory(id: string) {
  const item = categories.find(
    (category) => category.id === id
  );
  return item;
}
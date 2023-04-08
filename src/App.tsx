import { categories, getCategory } from './includes/category';
import { statuses, getStatus } from './includes/status';

function App() {

  const category = getCategory('ent');
  const status = getStatus('p');

  return (
    <div>
      <div>Category: {category?.text}</div>
      <div>Status: {status?.text}</div>
    </div>
  );
}

export default App;

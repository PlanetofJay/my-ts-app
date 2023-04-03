import { JsxOpeningElement } from "typescript";

function App() {
  const calcTotal = (value1: number, value2: number) => {
    
    // explicitly declare the type
    let sum: number = value1 + value2;
    return sum.toFixed(2);
  }

  const price = parseInt('5')
  const total: string = calcTotal(price, 6);
  
  let aux: number[] | string[];
  aux = 'abc';
  aux = 8;
  aux = true;

  aux = [];
  aux = ['abc', 'def'];
  aux = [123, 456, 789];
  aux = [true, false]

  aux = {};
  aux = null;
  aux = undefined;

  return (
    <div>
      Total: {total}
    </div>
  );
}

export default App;

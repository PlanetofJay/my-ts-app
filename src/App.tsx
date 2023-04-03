import { JsxOpeningElement } from "typescript";

function App() {
  const calcTotal = (value1: number, value2: number) => {
    
    // explicitly declare the type
    let sum: number = value1 + value2;
    return sum.toFixed(2);
  }

  const price = parseInt('5')
  const total: string = calcTotal(price, 6);
  
  let aux: [string, number];
  aux = ['abc', 123]

  return (
    <div>
      Total: {total}
    </div>
  );
}

export default App;

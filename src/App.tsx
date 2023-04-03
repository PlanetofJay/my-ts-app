
function App() {
  const calcTotal = (value1: number, value2: number) => {
    
    // explicitly declare the type
    let sum: number = value1 + value2;
    return sum.toFixed(2);
  }

  const price = parseInt('5')
  const total: string = calcTotal(price, 6);
  
  let aux: string | number | boolean;
  aux = 'abc';
  aux = 8;
  aux = true;

  return (
    <div>
      Total: {total}
    </div>
  );
}

export default App;

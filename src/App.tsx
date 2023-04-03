
function App() {
  const calcTotal = (value1: number, value2: number) => {
    
    // explicitly declare the type
    let sum: number = value1 + value2;
    return sum;
  }

  const total = calcTotal(3, 6);

  return (
    <div>
      Total: {total}
    </div>
  );
}

export default App;

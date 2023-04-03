
function App() {
  const calcTotal = (value1, value2) => {
    let sum = value1 + value2;
    return sum;
  }

  const total = calcTotal(3, 6);

  return (
    <div>
      Total:
    </div>
  );
}

export default App;

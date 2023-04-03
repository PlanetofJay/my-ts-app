function App() {
  const calcTotal = (value1: number, value2: number, value3?: number) => {
    let sum: number = value1 + value2;
    if (value3) {
      // sum = sum + value3;
      sum += value3;
    }
    return sum.toFixed(2);
  }

  const price = parseInt('5')
  const total: string = calcTotal(price, 6);
  const total2: string = calcTotal(3, 7, 5);

  return (
    <div>
      Total: {total} and {total2}
    </div>
  );
}

export default App;

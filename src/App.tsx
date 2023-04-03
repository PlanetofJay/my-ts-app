function App() {
  const doubleValue = (value: number | string) => {

    // Validate the typeof
    if (typeof value === 'string') {
      value = value + value;
    }
    else {
      value = value * 2;
    }

    return value;
  }

  const result1 = doubleValue(8);

  // doubleValue('John') >> 'JohnJohn' >> value + value
  const result2 = doubleValue('John');

  return (
    <div>
      <div>First Result is {result1}</div>
      <div>Second Result is {result2}</div>
    </div>
  );
}

export default App;

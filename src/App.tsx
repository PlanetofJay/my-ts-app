
function App() {
  const doubleValue = (value?: number | string): string => {
    if (!value) {
      return 'None';
    }

    // Validate the typeof
    if (typeof value === 'string') {
      value = value + value;
    }
    else {
      value = value * 2;
      value = value.toFixed(1);
    }
    return value;
  }

  const result1 = doubleValue(8);
  const result2 = doubleValue('John');
  const result3 = doubleValue();

  const showAlert = (): void => {
    alert('ok');
  }
  showAlert();

  return (
    <div>
      <div>First Result is {result1}</div>
      <div>Second Result is {result2}</div>
      <div>Third Result is {result3}</div>      
    </div>
  );
}

export default App;

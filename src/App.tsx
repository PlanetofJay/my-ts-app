
function App() {
  // If you don't care of the type of develop then
  // type script also don't care to validate everything for you.
  const doubleValue = (value?: number | string | number[] ) => {
    if (!value) {
      return 'None';
    }

    // Validate the typeof
    if (typeof value === 'string') {
      value = value + value;
    }
    else {
      value = value * 2;
    }
    return value;
  }

  let name = 'John';
  let age = 35;
  let poj; // any
  poj = 'John';
  poj = 35;
  poj = [1, 2, 3];


  const result1 = doubleValue(8);
  const result2 = doubleValue('John');
  const result3 = doubleValue();
  const result4 = doubleValue(true);
  const result5 = doubleValue([1, 2, 3]);
  const result6 = doubleValue({ name: 'John'});

  return (
    <div>
      <div>First Result is {result1}</div>
      <div>Second Result is {result2}</div>
      <div>Third Result is {result3}</div>      
      <div>Fourth Result is {result4}</div>      
      <div>Fifth Result is {result5}</div>      
      <div>Sixth Result is {result6}</div>      
    </div>
  );
}

export default App;

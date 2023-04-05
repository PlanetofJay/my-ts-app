
function App() {

  const getStatusMessage = (isPublished: boolean): string => {
    if (isPublished) {
      return 'This has been published.';
    }
    else {
      return 'This is not published yet.'
    }
  }
  const statusMessage = getStatusMessage(true);

  return (
    <div>
      <div>Status: {statusMessage}</div>
    </div>
  );
}

export default App;

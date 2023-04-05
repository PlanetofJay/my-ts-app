function App() {

  enum EStatus {
    Draft, 
    Published,
    Archived
  }

  // Draft, Published, Archived
  const getStatusMessage = (status: EStatus): string => {
    if (status === EStatus.Draft) {
      return 'This is just a draft.';
    }
    else if (status === EStatus.Published) {
      return 'This has been published.';
    }
    else {
      return 'This has been archived.';
    }
  }
  const statusMessage = getStatusMessage(EStatus.Published);

  return (
    <div>
      <div>Status: {statusMessage}</div>
    </div>
  );
}

export default App;

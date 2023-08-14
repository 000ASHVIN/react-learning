import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  let [alert, setAlert] = useState(true);
  return (
    <>
      { alert && <Alert closeAlert={() => setAlert(false)}>My Alert</Alert>}
      <Button
        type="btn-danger"
        onClicked={() => {
          setAlert(true);
        }}
      >
        Show Alert
      </Button>
    </>
  );
}

export default App;

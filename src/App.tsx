import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ["New York", "San Fransisco", "Tokyo", "Hong Kong"];

  const handleSelectItem = (item: string) => {
    console.log("Selected item: ", item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
      <ListGroup
        items={items}
        heading="My List Group"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

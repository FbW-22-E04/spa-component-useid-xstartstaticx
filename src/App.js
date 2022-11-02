import "./App.css";
import InputForm from "./InputForm";

function App() {
  const labelIds = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
  };

  return (
    <div className="App">
      <InputForm type="text" label={labelIds} />
    </div>
  );
}

export default App;

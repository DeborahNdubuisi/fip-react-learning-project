import Button from "./components/Button";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import Card from "./components/Card"
import Table from "./components/Table";
import Form from "./components/Form";

function App() {

  const users = [
    { name: "Deborah", age: 23 },
    { name: "John", age: 25 }
  ];

  return (
    <div>

      <h1>Reusable React Components</h1>

      <Card title="Form Example">
        <Form />
      </Card>

      <Card title="Inputs">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
      </Card>

      <Card title="Checkbox">
        <Checkbox label="Accept Terms" />
      </Card>

      <Card title="Buttons">
        <Button text="Save" />
        <Button text="Delete" />
      </Card>

      <Card title="User Table">
        <Table data={users} />
      </Card>

    </div>
  );
}

export default App;
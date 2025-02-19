import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const list = ["Nombre1", "Nombre2", "Nombre3", "Nombre4"];

  return (
    <Card>
      <CardBody title="Hola mundo" text="Este es el texto" />
      <List data={list} />
    </Card>
  );
}

export default App;

import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const list = ["Nombre1", "Nombre2", "Nombre3", "Nombre4"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  const handleSelect2 = (elemento: string) => {
    console.log("Mostrando", elemento);
  };

  return (
    <Card>
      <CardBody title="Hola mundo" text="Este es el texto" />
      <List data={list} onSelect={handleSelect} />
      <List data={list} onSelect={handleSelect2} />
    </Card>
  );
}

export default App;

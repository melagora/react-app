import Card, { CardBody } from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Card>
      <CardBody title="Hola mundo" text="Este es el texto" />
    </Card>
  );
}

export default App;

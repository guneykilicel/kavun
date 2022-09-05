import { useRoutes } from "react-router-dom";
import Home from "./components/home";
import routes from "./routes/routes";

function App() {
  const showRoutes = useRoutes(routes)
  return (
    <div>
      {showRoutes}
    </div>
  );
}

export default App;

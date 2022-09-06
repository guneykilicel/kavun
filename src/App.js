import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
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

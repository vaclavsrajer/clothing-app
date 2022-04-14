import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I Am the navigation Bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;

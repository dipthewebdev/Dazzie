import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/list/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="charts">
              <Route index element={<List />} />
            </Route>
            <Route path="customer">
              <Route index element={<List />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/list";
import AddProduct from "./components/add";
import EditProduct from "./components/edit";
 
function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            <Route exact path="/" element={<ProductList/>}>
              
            </Route>

            <Route exact path="/search/:city" element={<ProductList/>}>
              
            </Route>

            <Route exact path="/search/:country" element={<ProductList/>}>
              
            </Route>

            <Route exact path="/search/:state" element={<ProductList/>}>
              
            </Route>
            <Route path="/add" element={<AddProduct/>}>
              
            </Route>
            <Route path="/edit/:id" element={<EditProduct/>}>
              
            </Route>
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;
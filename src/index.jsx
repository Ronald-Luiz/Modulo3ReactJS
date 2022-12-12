import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./view/Menu";
import Home from "./view/Home";
import Footer from "./view/Footer.jsx";
import Read from "./view/read.jsx"
import Create from "./view/create.jsx"
import Update from "./view/update.jsx"
import Produtos from "./view/Produtos";
import Contatos from "./view/Contatos";
import NoPage from "./view/NoPage";
import Principal from "./Principal.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />

          <Route path="Footer" element={<Footer />} />
          <Route path="Produtos" element={<Produtos />} />
          <Route path="Contatos" element={<Contatos />} />
          <Route path="Read" element={<Read />} />
          <Route path="Create" element={<Create />} />
          <Route path="Update" element={<Update />} />
          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>

    

    
  );

 
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 

  <>
 
    <App />
    

    <Footer />

    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

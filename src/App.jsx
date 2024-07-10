import Carrinho from "./Carrinho"
import Dashboard from "./Dashboard"
import Moto from "./Motos"
import Motinha from "./Motinha"
import { BrowserRouter,Routes, Route } from "react-router-dom"

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Dashboard/>}></Route>
    <Route path="/carro/:id" element={<Carrinho/>}></Route>
    <Route path="/motos" element={<Moto/>}></Route>
    <Route path="/moto/:id" element={<Motinha/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App

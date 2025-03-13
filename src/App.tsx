import { useState } from "react"
import Header from "./components/header"
import Menu from "./components/menu"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import History from "./pages/history"
import Library from "./pages/library"
import { MenuProvider } from "./context/MenuContext"

function App() {
  const [openMenu, setOpenMenu] = useState(true)

  return (
    <MenuProvider>
      <BrowserRouter>
        <div className="App">    
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div style={{ width: '100%', display: 'flex' }}>
            <Menu openMenu={openMenu} />
            <div style={{ width: '100%', padding: '50px 70px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History/>} />
                <Route path="/library" element={<Library/>} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </MenuProvider>
  );
}

export default App

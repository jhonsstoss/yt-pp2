import { useState } from "react"
import Header from "./components/header"
import Menu from "./components/menu"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import History from "./pages/history"
import Library from "./pages/library"
import { MenuProvider } from "./context/MenuContext"

function App() {
  
  return (
    <MenuProvider>
      <BrowserRouter>
        <div className="App">    
          <Header />
          <div style={{ width: '100%', display: 'flex' }}>
            <Menu  />
            <div style={{ width: '100vw', padding: '0px 5px 70px 0px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
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

import Header from "./components/header"
import Menu from "./components/menu"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import AuthLayout from "./layouts/Authlayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home"
import History from "./pages/history"
import Library from "./pages/library"
import { MenuProvider } from "./context/MenuContext"
import { UserStorage } from "./context/UserContext"
import Login from "./pages/login"
import { CategoryProvider } from "./context/searchCategories"
import Upload from "./pages/upload"
import SignUp from "./pages/signup";


// function App() {
//   return (
//     <UserStorage>
//       <MenuProvider>
//         <CategoryProvider>
//           <BrowserRouter>
//             <div className="App">    
//               <Header />
//               <Menu />
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/upload" element={<Upload />} />
//                 <Route path="/history" element={<History/>} />
//                 <Route path="/library" element={<Library/>} />
//               </Routes>
//             </div>
//           </BrowserRouter>
//         </CategoryProvider>
//       </MenuProvider>
//     </UserStorage>
//   );
// }

// export default App

function App() {
  return (
    <UserStorage>
      <MenuProvider>
        <CategoryProvider>
          <BrowserRouter>
            <Routes>
              {/* Rotas públicas sem layout */}
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Route>

              {/* Rotas privadas com layout principal */}
              <Route element={
                <MainLayout>
                  <Header />
                  <Menu />
                </MainLayout>
              }>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/library" element={<Library />} />
                <Route path="/upload" element={<Upload />} />
              </Route>

              {/* Redirecionamento padrão */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </CategoryProvider>
      </MenuProvider>
    </UserStorage>
  )
}

export default App


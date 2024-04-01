import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";



function App() {

  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          
          <Header />
          <NavBar />
          <Main />

        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

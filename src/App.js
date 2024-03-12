import './App.css';
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Main from "./components/layout/main/Main";

function App() {
  return (
    <>
      <div className="wrapper">
          <Header/>
          <Main />
          <Footer/>
      </div>
    </>
  );
}

export default App;

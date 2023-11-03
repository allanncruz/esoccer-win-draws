import  Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './styles/style';
import Home from './pages/Home';
import About from './pages/About';
import EadriactLeague from './pages/EadriactLeague';
import GtLeague from './pages/GtLeague';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gt-league" element={<GtLeague />} />
          <Route path="/eadriact-league" element={<EadriactLeague />} />
        </Routes>
      </Main>
    </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CareerProvider } from './context/CareerContext';
import MindMapView from './pages/MindMapView';
import AboutPage from './pages/AboutPage';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <CareerProvider>
        <div className="app">
          <main style={{ height: '100vh' }}>
            <Routes>
              <Route path="/" element={<MindMapView />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </div>
      </CareerProvider>
    </Router>
  );
}

export default App;

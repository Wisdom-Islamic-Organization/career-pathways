import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CareerProvider } from './context/CareerContext';
import Header from './components/Header';
import MindMapView from './pages/MindMapView';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <CareerProvider>
        <div className="app">
          <Header />
          <main style={{ height: 'calc(100vh - 120px)' }}>
            <Routes>
              <Route path="/" element={<MindMapView />} />
            </Routes>
          </main>
        </div>
      </CareerProvider>
    </Router>
  );
}

export default App;

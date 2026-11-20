import { Routes, Route, Link } from 'react-router-dom';
import ClientsPage from './pages/ClientsPage';
import CurrencyPage from './pages/CurrencyPage';
import MagicBallPage from './pages/MagicBallPage';

export default function App() {
  return (
    <div>
      <nav style={{ backgroundColor: '#eee', padding: '10px 20px', display: 'flex', gap: '20px', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Курс валют</Link>
        <Link to="/clients">Клиенты</Link>
        <Link to="/magic">Магический шар</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<CurrencyPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/magic" element={<MagicBallPage />} />
        </Routes>
      </div>
    </div>
  );
}
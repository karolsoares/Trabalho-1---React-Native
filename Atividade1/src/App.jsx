import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputScreen from './components/InputScreen';
import ResultScreen from './components/ResultScreen';
import HistoryView from './components/HistoryView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Calculadora de Consumo de Combustível
          </h1>
          <Routes>
            <Route path="/" element={<InputScreen />} />
            <Route path="/result" element={<ResultScreen />} />
            <Route path="/history" element={<HistoryView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

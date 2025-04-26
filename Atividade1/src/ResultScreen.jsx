import { useLocation, useNavigate } from 'react-router-dom';

function ResultScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const consumption = location.state?.consumption;

  const getClassification = (value) => {
    if (value > 12) return 'Excelente';
    if (value > 10) return 'Bom';
    if (value > 8) return 'Regular';
    return 'Ruim';
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Resultado</h2>
      <div className="mb-4">
        <p className="text-lg">
          Consumo: <span className="font-bold">{consumption?.toFixed(2)} Km/L</span>
        </p>
        <p className="text-lg">
          Classificação:{' '}
          <span className="font-bold">{getClassification(consumption)}</span>
        </p>
      </div>
      <button
        onClick={() => navigate('/')}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Novo Cálculo
      </button>
    </div>
  );
}

export default ResultScreen;

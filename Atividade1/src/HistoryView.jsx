import { useNavigate } from 'react-router-dom';

function HistoryView() {
  const navigate = useNavigate();
  const history = JSON.parse(localStorage.getItem('fuelHistory') || '[]');

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Histórico de Cálculos</h2>
      {history.length === 0 ? (
        <p>Nenhum cálculo realizado ainda.</p>
      ) : (
        <div className="space-y-4">
          {history.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg"
            >
              <p>Data: {new Date(item.date).toLocaleDateString()}</p>
              <p>Quilômetros: {item.kilometers}</p>
              <p>Litros: {item.liters}</p>
              <p>Consumo: {item.consumption.toFixed(2)} Km/L</p>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => navigate('/')}
        className="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Voltar
      </button>
    </div>
  );
}

export default HistoryView;

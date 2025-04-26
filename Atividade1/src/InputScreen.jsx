import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InputScreen() {
  const [kilometers, setKilometers] = useState('');
  const [liters, setLiters] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const consumption = kilometers / liters;
    
    // Salvar no localStorage
    const history = JSON.parse(localStorage.getItem('fuelHistory') || '[]');
    const calculation = {
      id: Date.now(),
      kilometers: parseFloat(kilometers),
      liters: parseFloat(liters),
      consumption,
      date: new Date().toISOString()
    };
    history.push(calculation);
    localStorage.setItem('fuelHistory', JSON.stringify(history));

    // Navegar para a tela de resultado
    navigate('/result', { state: { consumption } });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Quilômetros Percorridos:</label>
          <input
            type="number"
            value={kilometers}
            onChange={(e) => setKilometers(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Litros Consumidos:</label>
          <input
            type="number"
            value={liters}
            onChange={(e) => setLiters(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Calcular
        </button>
      </form>
      <button
        onClick={() => navigate('/history')}
        className="w-full mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
      >
        Ver Histórico
      </button>
    </div>
  );
}

export default InputScreen;

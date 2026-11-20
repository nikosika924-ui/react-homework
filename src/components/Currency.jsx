import { useState, useEffect } from 'react';

export default function Currency() {
  const [currencies, setCurrencies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(Object.values(data.Valute));
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Курсы валют</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {currencies.map((item) => (
          <div key={item.ID} style={{ border: '1px solid #999', backgroundColor: '#f0f0f0', padding: '10px', width: '200px' }}>
            <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>{item.CharCode}</p>
            <p style={{ fontSize: '12px', margin: '0 0 10px 0', height: '30px' }}>{item.Name}</p>
            <p style={{ margin: 0 }}>{(item.Value / item.Nominal).toFixed(2)} руб.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
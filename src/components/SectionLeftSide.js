import React, { useState, useEffect } from 'react';

const rates = {
  car: 5000,
  bike: 1000,
  suv: 7000
};

const currencyRates = {
  USD: 0.013,
  EUR: 0.011,
  GBP: 0.0097,
  INR: 1,
  JPY: 1.47,
  AUD: 0.019,
  CAD: 0.017,
  CHF: 0.012,
  CNY: 0.084,
  RUB: 0.99
};

export default function ContentSection() {
  const [type, setType] = useState('bike');
  const [days, setDays] = useState(1);
  const [currency, setCurrency] = useState('INR');
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    const rate = rates[type] * days;
    const convertedRate = rate * currencyRates[currency];
    setPrice(convertedRate);
  };

  useEffect(() => {
    calculatePrice();
  }, [type, days, currency]);

  return (
    <div className='titleBox'>
      <div className='premium'>
        <h5>* premium</h5>
      </div>
      <div className='title'>
        <h1>Rental Vehicles</h1>
      </div>
      <div className='searchBox'>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="suv">SUV</option>
        </select>
        <input 
          type="number" 
          value={days} 
          onChange={(e) => setDays(e.target.value)} 
          min="1" 
          placeholder="Number of days" 
        />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="RUB">RUB</option>
        </select>
        {price > 0 && (
          <div className="results">
            <p>Price: {price.toFixed(2)} {currency}</p>
          </div>
        )}
      </div>
    </div>
  );
}

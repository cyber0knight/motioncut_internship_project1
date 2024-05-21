import React from 'react'

export default function PricingSection({ selectedCategory, setSelectedCategory }) {
  
  const renderDetails = () => {
    switch (selectedCategory) {
      case 'bikeImg':
        return (
          <>
            <h1>Sport Bikes</h1>
            {/* <h2>Price: 1000rs / day</h2> */}
            <ul className='unorderedList'>
              <li><h4>One helmet will be provided by us.</h4></li>
              <li><h4>Customers must bring additional helmets if needed.</h4></li>
              <li><h4>Unlimited kilometers included.</h4></li>
              <li><h4>Free roadside assistance available.</h4></li>
              <li><h4>GPS tracking and navigation included.</h4></li>
              <li><h4>Bike insurance covered.</h4></li>
            </ul>
          </>
        );
      case 'carImg':
        return (
          <>
            <h1>Luxury Cars</h1>
            {/* <h2>Price: 5000rs / day</h2> */}
            <ul className='unorderedList'>
              <li><h4>Fuel included for the first 100 km.</h4></li>
              <li><h4>Optional driver service available upon request.</h4></li>
              <li><h4>Premium sound system and leather interiors.</h4></li>
              <li><h4>Comprehensive insurance and breakdown cover.</h4></li>
              <li><h4>Complimentary refreshments and bottled water.</h4></li>
              <li><h4>Free GPS navigation and Bluetooth connectivity.</h4></li>
            </ul>
          </>
        );
      case 'suvImg':
        return (
          <>
            <h1>SUV</h1>
            {/* <h2>Price: 7000rs / day</h2> */}
            <ul className='unorderedList'>
              <li><h4>Spacious and comfortable for long journeys.</h4></li>
              <li><h4>Free GPS and advanced music system.</h4></li>
              <li><h4>Rear-seat entertainment system for passengers.</h4></li>
              <li><h4>Includes one full tank of fuel.</h4></li>
              <li><h4>All-terrain tires and 4-wheel drive for off-road capabilities.</h4></li>
              <li><h4>Optional child safety seats and roof racks available.</h4></li>
              <li><h4>Comprehensive insurance and 24/7 roadside assistance.</h4></li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };
  

  return (
    <div className={`pricingSection2 ${selectedCategory}`}>
      <div className='pricingNavBar'>

        <button onClick={() => setSelectedCategory('bikeImg')} 
        className={selectedCategory === 'bikeImg' ? 'active' : ''}>
          Sport Bikes
        </button>

        <button onClick={() => setSelectedCategory('carImg')}
        className={selectedCategory === 'carImg' ? 'active' : ''}>
          Luxury Cars
        </button>

        <button onClick={() => setSelectedCategory('suvImg')} 
        className={selectedCategory === 'suvImg' ? 'active' : ''}>
          SUV
        </button>

      </div>
      <div className='pricingTable '>
        <div className='pricingContent'>
          {renderDetails()}
        </div>
      </div>
    </div>
  ) 
}
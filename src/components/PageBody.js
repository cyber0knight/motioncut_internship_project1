import React, {useState} from 'react'
import ContentSection from './SectionLeftSide'
import PricingSection from './SectionRightSide'

export default function PageBody() {

  const [selectedCategory, setSelectedCategory] = useState('bikeImg');

  return (
    <pageBody className="pageSection ">
      <div className={`backgroundImage ${selectedCategory}`}></div>
        <div className='contentSection' >
            <ContentSection />
        </div>
        <div className='pricingSection'>
            <PricingSection 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory}  
            />
        </div>
    </pageBody>
  )
}

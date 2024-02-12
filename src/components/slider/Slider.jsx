

import React, { useState } from 'react';
import './slider.scss'; // Import CSS file with styles

function Slider() {
  // State to manage the active filter
  const [filter, setFilter] = useState('all');

  // Function to handle filter selection
  const handleFilter = (filterName) => {
    setFilter(filterName);
  };

  return (
    <div className="main">
      <h1>My Gallery</h1><br />
    
      {/* <h2></h2> */}

      <div id="myBtnContainer">
        <button className={filter === 'all' ? 'btn active' : 'btn'} onClick={() => handleFilter('all')}>
          Show all
        </button>
        <button className={filter === 'nature' ? 'btn active' : 'btn'} onClick={() => handleFilter('nature')}>
          Nature
        </button>
        <button className={filter === 'cars' ? 'btn active' : 'btn'} onClick={() => handleFilter('cars')}>
          Cars
        </button>
        <button className={filter === 'people' ? 'btn active' : 'btn'} onClick={() => handleFilter('people')}>
          People
        </button>
      </div>

      <div className="row">
        {portfolioItems.map((item, index) => (
          <div key={index} className={`column ${item.category === filter || filter === 'all' ? 'show' : ''}`}>
            <div className="content">
              <img src={item.image} alt={item.alt} style={{ width: '100%', height:'300px' }} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Sample data for portfolio items
const portfolioItems = [
  { category: 'nature', image: '/images/mountain.jpg', alt: 'Mountains', title: 'Mountains', description: 'I love mountains..' },
  { category: 'nature', image: '/images/lights.jpg', alt: 'Lights', title: 'Lights', description: 'I love nature lights..' },
  { category: 'nature', image: '/images/forest.jpg', alt: 'Nature', title: 'Forest', description: 'I love Forest..' },
  { category: 'cars', image: '/images/retrocar.jpg', alt: 'Car', title: 'Retro', description: 'I love retro car..' },
  { category: 'cars', image: '/images/fastcar.jpg', alt: 'Car', title: 'Fast', description: 'I love race car..' },
  { category: 'cars', image: '/images/classiccar.jpg', alt: 'Car', title: 'Classic', description: 'I love classic car..' },
  { category: 'people', image: '/images/girl.webp', alt: 'girl', title: 'Girl', description: 'Respect girls..' },
  { category: 'people', image: '/images/man.jpg', alt: 'man', title: 'Man', description: 'man will be man..' },
  { category: 'people', image: '/images/woman.jpg', alt: 'woman', title: 'Woman', description: 'woman power..' },
];

export default Slider;

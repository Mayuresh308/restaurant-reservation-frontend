// Menu.jsx
import React from 'react';
import { data } from '../restApi.json';

const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>Food is the ultimate love language. It speaks directly to the heart, nourishing the soul, and creating memories with every bite</p>
          </div>
          <div className="dishes_container">
            {data[0].dishes.map(element => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

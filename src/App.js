import React from 'react';

import { RestaurantClass, RestaurantFunction } from './components/restaurant_calculation';
import { Form, FormLibrary } from './components/form_validation';

import './App.css';

function App() {
  return (
    <div>
      <div className="restaurant-container">
        <RestaurantClass />
        <RestaurantFunction />
      </div>
      <div className="forms-container">
        <Form />
        <FormLibrary />
      </div>
    </div>
  );
};

export default App;
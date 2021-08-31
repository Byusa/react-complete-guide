import React from 'react'
import Expenses from './components/Expenses/Expenses'


function App() {
  const expenses = [
    {id: 'e1', title: 'Car Insurance', amount: 292.67, date: new Date(2021, 2, 28)}, 
    {id: 'e1', title: 'Health Insurance', amount: 111.67, date: new Date(2021, 3, 28)}, 
    {id: 'e1', title: 'House Insurance3', amount: 192.67, date: new Date(2021, 12, 28)}, 
    {id: 'e1', title: 'Business Insurance4', amount: 392.67, date: new Date(2021, 4, 28)}, 
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/> 
    </div>
  );
  
  // //under the hood code created when you create this
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
}

export default App;

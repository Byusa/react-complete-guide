import './App.css';
import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses'


function App() {
  const expenses = [
    {id: 'e1', title: 'Car Insurance', amount: 292.67, date: new Date(2021, 2, 28)}, 
    {id: 'e1', title: 'Health Insurance', amount: 111.67, date: new Date(2021, 3, 28)}, 
    {id: 'e1', title: 'House Insurance3', amount: 192.67, date: new Date(2021, 12, 28)}, 
    {id: 'e1', title: 'Business Insurance4', amount: 392.67, date: new Date(2021, 4, 28)}, 
  ]
  return (
    <div className="App">
      <div>Hey sd</div>
      {/* {Object.keys(expenses).map((index, exp) => {
        <ExpenseItem 
        key={index}
        title={exp.title} 
        amount={exp.amount}
        date={exp.date}
        /> 
      })} */}

      <Expenses items={expenses}/> 
      
      {/* <ExpenseItem 
      title={props.title} 
      amount={props.amount}
      date={props.date}
     /> */}
    </div>
  );
}

export default App;

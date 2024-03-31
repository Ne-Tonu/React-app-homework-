import logo from './logo.svg';
import './App.css';
import Item from './components/Item';

const Zagadki = [
  {
    id: 1,
    description: 'Загадка номер один',
    options: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
    correct: 2,
  },
  {
    id: 2,
    description: 'Загадка номер два',
    options: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
    correct: 4,
  },
  {
    id: 3,
    description: 'Загадка номер три',
    options: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
    correct: 1,
  },
];

function App() {
  return (
    <div className="App">
      {Zagadki.map(Zagadka => <Item Item={Zagadka} key={Zagadka.id}/> )} 
    </div>
  );
}

export default App;

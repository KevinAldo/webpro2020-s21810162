import './App.css';
import Header from './Components/Header';
import Hello from './Components/Hello';
import Content from './Components/Content';
import Card from './Components/Card/Cards';
import {person} from './Components/Card/person';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Hello />
      <Content />
      {
        person.map ((item) => {
          return (
            <Card 
            name={item.name}
            institution={item.institution}
            address={item.address}
            phoneNumber={item.phoneNumber}
            />
          )
        })
      }
    </div>
  );
};

export default App;
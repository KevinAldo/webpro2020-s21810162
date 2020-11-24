import './App.css';
import Header from './Components/Header';
import Hello from './Components/Hello';
import Content from './Components/Content';
import Card from './Components/Card/Cards';
import {person} from './Components/Card/person';
import ApPI from './Components/ApPI/ApPI';
// import ReactPeople from './ReactPeople/ReactPeople';

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
            username={item.username}
            email={item.email}
            phone={item.phone}
            />
          )
        })
      }
    {/* <ReactPeople /> */}
    <ApPI />
    </div>
  );
};

export default App;
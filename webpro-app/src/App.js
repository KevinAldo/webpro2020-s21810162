import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ContentPages, Home, ReactP } from './pages';

const App = () =>{
    return(
        <Router>
            <div>
              <nav>
                  <ul>
                      <li>
                        <Link to="/Home">Home</Link>
                      </li>
                      <li>
                        <Link to="/Content">Content</Link>
                      </li>
                      <li>
                        <Link to="/ReactPeople">ReactPeople</Link>
                      </li>
                  </ul>
              </nav>
              <Switch>
                <Route path="/Home">
                  <Home />
                </Route>
                <Route path="/Content">
                  <ContentPages />
                </Route>
                <Route path="/ReactPeople">
                  <ReactP />
                </Route>
               </Switch>
            </div>
        </Router>
    );
};

export default App;



// import './App.css';
// import Header from './Components/Header';
// import Hello from './Components/Hello';
// import Content from './Components/Content';
// import Card from './Components/Card/Cards';
// import {person} from './Components/Card/person';
// import ApPI from './Components/ApPI/ApPI';
// // import ReactPeople from './ReactPeople/ReactPeople';

// function App() {
//   return (
//     <div className="main-container">
//       <Header />
//       <Hello />
//       <Content />
//       {
//         person.map ((item) => {
//           return (
//             <Card 
//             name={item.name}
//             username={item.username}
//             email={item.email}
//             phone={item.phone}
//             />
//           )
//         })
//       }
//     {/* <ReactPeople /> */}
//     <ApPI />
//     </div>
//   );
// };

// export default App;
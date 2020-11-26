import React from 'react';
import ApPI from '../../Components/ApPI/ApPI';
import Card from '../../Components/Card/Cards';
import { person } from '../../Components/Card/person';
import Content from '../../Components/Content';

const ContentPages = () =>{
    return(
        <div className="main-container">
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
            <ApPI />
        </div>
    );
};
export default ContentPages;
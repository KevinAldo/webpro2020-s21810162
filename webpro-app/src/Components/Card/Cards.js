// Pertemuan 21
// import React from 'react';
// import Counter from '../Counters/Counter';

// const Card = ({name, institution, address, phoneNumber}) => {
//     return (
//         <div className="card-container">
//             <p>{name}</p>
//             <p>{institution}</p>
//             <p>{address}</p>
//             <p>{phoneNumber}</p>
//             <Counter title= "Counter Component" />
//         </div>
//     );
// };
// export default Card;

// Pertemuan 24
import React from 'react';
import Counter from '../Counters/Counter';
const Card = ({name, username, email, phone}) =>{
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <Counter title= "Counter Component" />
        </div>
    );
};

export default Card;
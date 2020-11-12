//Pertemuan 22
import React, { useState, useEffect } from 'react';
import {tambah, kurang} from './Counters/penjumlahan';
// class Counter extends Component{
// state ={
//         number: 0,
// };
// tambah = () =>{
//     this.setState({number: this.state.number + 1});
// }
// kurang = () =>{
//     this.state.number < 1 
//     ? this.setState({number: 0})
//     : this.setState({number: this.state.number - 1});
// }
//     render (){
//         return (
//           <div>
//             <p>{this.props.title}</p>
//             <p>Komponen ini sudah diklik sebanyak {this.state.number} kali</p>
//             <button onClick = {this.tambah}>Tambah</button>
//             <button onClick = {this.kurang}>Kurang</button>
//           </div>
//         );
//     }
// }

const Counter = (props) =>{
    const [number, setNumber] = useState(0);
    
    useEffect(()=>{
        console.log("Komponen telah di mount");
    }, [])
    return(
        <div>
           <p>{props.title}</p> 
           <p>Komponen ini sudah diklik sebanyak {number} kali</p>
           <button onClick = {() => tambah()}>Tambah</button>
           <button onClick = {kurang}>Kurang</button>
        </div>
    )
}

export default Counter;
  import {Year, Day} from '../Utils/Waktu';

const Hello = () =>{
    return(
      <>
      <p>Hello, welcome to to Webpro Class</p>
      <p>Tahun sekarang adalah {Year()}</p>
      <p>Tanggal sekarang adalah {Day()}</p>
      </>
    );
  };

export default Hello;
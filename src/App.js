import logo from './logo.svg';
import './App.css';


function Square({value}){
function handleClick(){

console.log('clicked !')

}

return (
<button className="square"
onClick={handleClick}
>{value}</button>

);

}


  export default function Board(){
         return(
          <>
         <div className="board-row">
         <Square value ="1" />
         <Square value ="2" />
         <Square value ="3" />
         </div>

         <div className="board-row">
         <Square value ="1" />
         <Square value ="2" />
         <Square value ="3" />
         </div>

         <div className="board-row">
       <Square value ="1" />
       <Square value ="2" />
       <Square value ="3" />
         </div>

          < />
         );

      }



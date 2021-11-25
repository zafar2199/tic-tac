import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GameBord } from './components/GameBord';
import ViewBoard from './components/ViewBoard';
import { ViewTurn } from './components/ViewTurn';
import {useSelector} from 'react-redux';
import PlayAgain from './components/playAgain';



function App() {
  const winner = useSelector((state)=>state.winner);
  if(winner === ''){
    return (
      <div className="App d-flex flex-column align-items-center mt-5">
        <GameBord />
        <div className="mt-3">
          <ViewTurn />
        </div>
      </div>
    );
  } else {
    return(

      <div className="App d-flex flex-column align-items-center mt-5" >
           <ViewBoard />
           <div className="mt-3">
             <ViewTurn />
           </div>
             <PlayAgain />
      </div>
    )
  }

}

export default App;

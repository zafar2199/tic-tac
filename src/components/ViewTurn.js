import {useSelector} from 'react-redux';

export const  ViewTurn = () => {
  const turn = useSelector((store) => store.turn)
  const winner = useSelector((store) => store.winner)
  return(winner ==='') ? <h1> Turn :{ turn } Player</h1> : <h1>Winner : {winner}</h1>
}
<div>

</div>
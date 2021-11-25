import {useDispatch} from 'react-redux';
import {eraseBoard , eraseTurn ,ereseWinner} from '../state/actions/allActions'

const PlayAgain = () => {
  const dispatch = useDispatch()
  return(
    <button className="btn btn-success btn-lg" onClick={()=>
       {dispatch(eraseBoard());
        dispatch(eraseTurn());
        dispatch(ereseWinner());
      }}>Play again</button>
  )
}

export default PlayAgain;
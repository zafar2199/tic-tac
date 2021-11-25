export const moveX = (row , col) => {
    return {
      type:"board/moveX",
      payload: [row , col]
    }
}

export const moveO = (row , col) => {
  return {
    type:"board/moveO",
    payload: [row , col]
  }
}

export const eraseBoard = () =>{
  return{
    type:'bord/erase'
  }

}

export const turnX = () => {
  return {
    type:"turn/x"
  }
}

export const turnO = () => {
  return {
    type:"turn/o"
  }
}

export const eraseTurn = () => {
  return {
    type:"turn/erase"
  }
}


export const winnerX = () => {
  return {
    type: "winner/x"
  }
}

export const winnerO = () => {
  return {
    type: "winner/o"
  }
}

export const ereseWinner = () => {
  return {
    type: "inner/erase"
  }
}


export const winnerDraw = () => {
  return {
    type: "winner/draw"
  }
}
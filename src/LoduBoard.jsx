import { useState } from "react"
export default function LoduBoard(){

    const [moves, setMove] = useState({blue: 0, red: 0, yellow:0, green: 0 });

    const updateBlue =() =>{
        setMove((value)=>{
            return {...value, blue: value.blue +1}
        });
    }
    const updateYellow =() =>{
        setMove((value)=>{
            return {...value, yellow: value.yellow +1}
        });
    }
    const updateGreen =() =>{
        setMove((value)=>{
            return {...value, green: value.green +1}
        });
    }
    const updateRed =() =>{
        setMove((value)=>{
            return {...value, red: value.red +1}
        });
    }
    
    return(
        <div>
            <p style={{color:'white'}} >Game Begins</p>
            <div className="board" >
                <p style={{color:'white'}}>Blue moves ={moves.blue}</p>
                <button style={{background: 'blue', color:'white'}} onClick={updateBlue}>+1</button>
                <p style={{ color:'white'}}>Yellow moves ={moves.yellow}</p>
                <button style={{background: 'yellow' }} onClick={updateYellow}>+1</button>
                <p style={{color:'white'}}>Green moves ={moves.green}</p>
                <button style={{background: 'green', color:'white'}} onClick={updateGreen}>+1</button>
                <p style={{color:'white'}}>Red moves ={moves.red}</p>
                <button style={{background: 'red', color:'white'}} onClick={updateRed}>+1</button>
                
            </div>
        </div>
    )
}


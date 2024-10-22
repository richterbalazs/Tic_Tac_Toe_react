import './Cella.css'
import React, { useContext } from 'react'
import { kattContext } from '../context/kattContext.js'

function Cella(props) {
    const {katt} = useContext(kattContext);
    function kattintas(){
      katt(props.index)
    }

  return (
    <div className='cella' onClick={()=>{kattintas()}}>
        {props.jel}
    </div>
  )
}

export default Cella
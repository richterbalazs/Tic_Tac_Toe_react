// itt hozom létre a contextet és a providert.
// egy helyen kezelem az adatokat, és megszüntetjük a buborékoltatási láncot

import { createContext } from "react";
import { useState } from "react";

export const kattContext = createContext(""); // létrehozok egy kontextet

export const KattProvider = ({ children }) => { // 

    const [lista,setLista] = useState(["X","X"," ","O"," "," "," "," ","O"]);
    const  [lepes,setLepes]=useState(0);

    function katt(adat){
      console.log("app-ban",adat)
      
      const sl=[...lista]

      if (lepes%2==0){
        sl[adat]="X"
      }else{
         sl[adat]="O"
      }    
      setLista([...sl]) //értékadás történi a háttérben: lista=sl

      let slepes=lepes + 1;
      setLepes(slepes);

      //setLepes(lepes+1) ez jó
      //setLepes(lepes+=1) - ezt nem tehetem meg)
    }

    return <kattContext.Provider value={{lista, katt}}>
            {children}
            </kattContext.Provider>;
}
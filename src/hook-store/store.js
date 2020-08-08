import {useState ,useEffect} from 'react'

let globalState={};
let listeners=[];
let actions={};

export const useStore=(sholdListen=true)=>{
   const setState= useState(globalState)[1]

    const dispatch=(actionIdentifier,payload)=>{
       const newState= actions[actionIdentifier](globalState,payload)
       globalState={...globalState,...newState}

       for(const listener of listeners ){
           listener(globalState)
       }

    }

   useEffect(()=>{
       if(sholdListen){
        listeners.push(setState)
       }
   

    return()=>{
        if(sholdListen){
            listeners=listeners.filter(li=>li!==setState)
        }
        
    }

   },[setState,sholdListen])
  

   return [globalState,dispatch]


};



export const initStore=(userActions,initalState)=>{
    if(initalState){
        globalState={...globalState,...initalState}
    }

    actions={...actions,...userActions}
};


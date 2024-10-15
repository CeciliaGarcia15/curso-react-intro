import React from "react";

function useLocalStorage(itemName, initialValue){//esto es un custom hook
  const [item,setItem] = React.useState(initialValue);
  const [loading,setloading] = React.useState(true);
  const [error,setError] = React.useState(false);
    

  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName); 
        let parsedItem;
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify([initialValue]));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setloading(false);
      }catch(error){
        setloading(false);
        setError(true);
      }
    },2000);
    
    
  },[]);

   
  //  const defaultTodos = [
//    { text: "Cortar cebolla", completed: true },
//    { text: "Tomar el curso de intro a React", completed: false },
//    { text: "Llorar con la llorona", completed: false },
//    { text: "LALALALA", completed: false },
//    { text: "Lalas", completed: false },
//  ];

// localStorage.setItem('TODOS_V1',defaultTodos);


//localStorage.removeItem('TODOS_V1');


  
    
    const saveItem = (newItem) => {
      setItem(newItem);
      localStorage.setItem("TODOS_V1",JSON.stringify(newItem));
    };
  
    //devuelve el item que es el que tiene todos los todos u objetos guardados en el localstorage
    //devuelve el actualizador del item que actualiza en react y en el localstorage
    return {
      item,
      saveItem,
      loading,
      error
    };
  }

  export {useLocalStorage}
import { useReducer } from "react";

type Action = {
  type: 'INCREMENT' | 'DECREASE'| 'RESET';
};

const reducer = (contador: number, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return contador + 1;

    case "DECREASE":
      return contador - 1;

    case "RESET":
      return 0;
  }
  return contador;
};

export default function Contador() {
  //TODO: Asi se haria con useState ↩
  /*
   const [contador, setContador] = useState(0);
   return (
   <>
     <h1>{contador}</h1>
     <button onClick={() => setContador(contador + 1)}>Incrementar</button>
     <button onClick={() => setContador(contador - 1)}>Reducir</button>
     <button onClick={() => setContador(0)}> Resetear</button>
   </>
   ) 
   */

  const [contador, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>{contador}</h1>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>INCREMENTAR</button>
      <button onClick={() => dispatch({type: 'DECREASE'})}>REDUCIR</button>
      <button onClick={() => dispatch({type: 'RESET'})}>REINICIAR</button>
    </>
  );
}

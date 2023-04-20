import { useRef } from "react";

const Parrafos = () => {

    const textoRef = useRef(null)

    const handleTexto = () => {
        // textoRef.current.innerHTML = 'Hola mundo'
        textoRef.current.scrollIntoView()
    }

    return (
        <div className="container my-5">
            <button onClick={handleTexto}>Disparar ref</button>
        </div>
    );
};

export default Parrafos;



    

   
         
           
            
            


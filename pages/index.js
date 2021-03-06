import { useState } from "react";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const  [ contador, setContador ] = useState(1)

    function adicionar() {
        setContador(contador + 1)
    }
    return(
        <div>
            <div>O número incrementado é: {contador}</div>
            <button onClick={adicionar}>Adicionar</button>
        </div>
    )
}

export default Home
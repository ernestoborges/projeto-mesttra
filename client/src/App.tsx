import { useState } from 'react';
import './App.css'
import axios from "axios";

export function App() {

  const [isBackendWorking, setIsBackendWorking] = useState(false);
  const [isFirstConnection, setIsFirstConnection] = useState(true);

  function testBackend() {
    axios.get("http://localhost:3000")
      .then(response => {
        setIsBackendWorking(true);
        if (isFirstConnection) {
          setIsFirstConnection(false);
        }
      })
      .catch(error => {
        console.log(`Erro ao conectar com servidor: ${error}`);
        setIsBackendWorking(false);
        if (isFirstConnection) {
          setIsFirstConnection(false);
        }
      })
  }

  return (
    <>
      <h1>
        Olá, mundo!
      </h1>
      <div>
        <h2>Clique para testar o backend!</h2>
        <button
          style={{
            color: "black",
            padding: "10px",
          }}
          onClick={() => testBackend()}
        >
          Conectar
        </button>
        <div>
          <output
          style={{
            color: `${!isFirstConnection && isBackendWorking ? "green" : "red"}`
          }}
          >
            {
              isFirstConnection
                ? ""
                : isBackendWorking
                  ? "Conectado com sucesso!"
                  : "Erro ao conectar com servidor"
            }
          </output>
        </div>
      </div>
    </>
  )
}

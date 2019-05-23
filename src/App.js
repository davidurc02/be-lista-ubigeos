import React from 'react';
import './App.css';
import UbigeoList from "./components/UbigeoList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Se pruebe probar el ejercicio cargando el archivo de texto "listado.txt" ubicado en la carpeta "files"
        <UbigeoList />
      </header>
    </div>
  );
}

export default App;

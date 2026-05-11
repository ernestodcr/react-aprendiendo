import './App.css'

import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Directorio de Contactos</h1>
        <p>Explora los perfiles de nuestro equipo</p>
      </header>

      <main className="grid-layout">
        <Card nombre="Elena" edad={30} ciudad="Palencia" />
        <Card nombre="Luis" edad={25} ciudad="Valladolid" />
        <Card nombre="Marcos" edad={40} ciudad="Madrid" />
        <Card nombre="Daniel" edad={10} ciudad="Palencia" />
        <Card nombre="Rebeca" edad={17} ciudad="Valladolid" />
        <Card nombre="Lucia" edad={20} ciudad="Madrid" />
      </main>
    </div>
  )
}

export default App

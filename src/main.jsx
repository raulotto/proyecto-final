import React from 'react'; // Importa React para poder usar JSX y otras funcionalidades de React.
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar la aplicación en el DOM.
import App from './App'; // Importa el componente principal de la aplicación.
import './index.css'; // Importa los estilos CSS globales.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* React.StrictMode es una herramienta para destacar problemas potenciales en la aplicación. */}
    <App /> {/* Renderiza el componente App, que es el componente principal de la aplicación. */}
  </React.StrictMode>,
);

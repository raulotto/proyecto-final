import React from 'react'; // Importa React para poder usar JSX y otras funcionalidades de React.
import { FaArrowRight } from 'react-icons/fa'; // Importa el ícono de flecha derecha desde la biblioteca react-icons.

// Definición del componente ProductCard que recibe una prop: product.
const ProductCard = ({ product }) => (
  <div className="product-card">
    {/* Muestra la imagen del producto */}
    <img src={product.image} alt={product.title} />
    
    {/* Muestra el título del producto en la parte superior */}
    <div className='info-top'>
      <h2>{product.title}</h2>
    </div>
    
    {/* Muestra el precio del producto y un enlace con un ícono de flecha en la parte inferior */}
    <div className='info-bottom'>
      <span>${product.price}</span>
      <a href="#">
        <FaArrowRight /> {/* Ícono de flecha derecha */}
      </a>
    </div>
  </div>
);

export default ProductCard; // Exporta el componente para su uso en otros archivos.

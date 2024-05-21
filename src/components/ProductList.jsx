import React from 'react'; // Importa React para poder usar JSX y otras funcionalidades de React.
import ProductCard from './ProductCard'; // Importa el componente ProductCard para mostrar cada producto individual.

const ProductList = ({ products }) => (
  <div className="product-list">
    {/* Itera sobre la lista de productos y renderiza un ProductCard para cada producto */}
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList; // Exporta el componente para su uso en otros archivos.

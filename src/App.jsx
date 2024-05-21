import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import './index.css';

// Componente principal de la aplicación
const App = () => {
  // Definición de estados usando useState
  const [products, setProducts] = useState([]); // Almacena todos los productos
  const [filteredProducts, setFilteredProducts] = useState([]); // Almacena los productos filtrados por categoría
  const [loading, setLoading] = useState(true); // Indica si los datos están siendo cargados
  const [error, setError] = useState(null); // Almacena cualquier error que ocurra durante la carga de datos
  const [selectedCategory, setSelectedCategory] = useState('all'); // Almacena la categoría seleccionada

  // useEffect para cargar los productos cuando el componente se monta
  useEffect(() => {
    // Función asíncrona para obtener productos desde una API
    const fetchProducts = async () => {
      try {
        // Realiza una solicitud GET a la API
        const response = await axios.get('https://fakestoreapi.com/products');
        // Establece los productos en el estado
        setProducts(response.data);
        // Inicializa los productos filtrados con todos los productos
        setFilteredProducts(response.data);
      } catch (err) {
        // Si ocurre un error, lo guarda en el estado de error
        setError(err.message);
      } finally {
        // Establece loading a false una vez que los datos se han cargado o ha ocurrido un error
        setLoading(false);
      }
    };

    fetchProducts(); // Llama a la función para cargar los productos
  }, []); // El array vacío indica que este useEffect solo se ejecuta una vez cuando el componente se monta

  // useEffect para actualizar los productos filtrados cuando se cambia la categoría seleccionada
  useEffect(() => {
    if (selectedCategory === 'all') {
      // Si la categoría seleccionada es 'all', muestra todos los productos
      setFilteredProducts(products);
    } else {
      // Filtra los productos por la categoría seleccionada
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]); // Dependencias: se ejecuta cuando cambia selectedCategory o products

  // Si los datos están siendo cargados, muestra un mensaje de carga
  if (loading) {
    return <div className='loading-seccion'>Cargando...</div>;
  }

  // Si ocurre un error, muestra un mensaje de error
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Renderiza la aplicación
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
        {/* Filtro de categorías */}
        <div className="w-full md:w-1/6 sticky top-0 h-screen p-4 bg-gray-100 list-cat">
          <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        </div>
        {/* Lista de productos */}
        <div className="w-full md:w-5/6 p-4 list-pro">
          <ProductList products={filteredProducts} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

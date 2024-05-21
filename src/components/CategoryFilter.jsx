import React, { useState, useEffect } from 'react'; // Importa React y los hooks useState y useEffect.
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP.

// Definición del componente CategoryFilter que recibe props: selectedCategory y onSelectCategory.
const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  const [categories, setCategories] = useState([]); // Define el estado categories para almacenar las categorías.

  // useEffect para cargar las categorías cuando el componente se monta.
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Hace una solicitud GET a la API para obtener las categorías de productos.
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        // Establece las categorías en el estado, incluyendo 'all' al inicio de la lista.
        setCategories(['all', ...response.data]);
      } catch (error) {
        // Maneja cualquier error que ocurra durante la solicitud.
        console.error('Error fetching categories:', error);
      }
    };

    // Llama a la función fetchCategories para obtener las categorías.
    fetchCategories();
  }, []); // El array vacío indica que este useEffect solo se ejecuta una vez cuando el componente se monta.

  return (
    <div className="category-filter">
      {/* Itera sobre las categorías y crea un botón para cada una */}
      {categories.map(category => (
        <button
          key={category} // La clave única para cada categoría.
          className={selectedCategory === category ? 'active' : ''} // Aplica la clase 'active' si la categoría está seleccionada.
          onClick={() => onSelectCategory(category)} // Llama a onSelectCategory con la categoría seleccionada al hacer clic.
        >
          {category} {/* Muestra el nombre de la categoría */}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter; // Exporta el componente para su uso en otros archivos.

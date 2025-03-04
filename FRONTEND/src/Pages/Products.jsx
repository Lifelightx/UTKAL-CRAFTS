import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This would be replaced with an actual API call when backend is ready
    const fetchProducts = async () => {
      try {
        // Mock API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dummy data based on your schema
        const dummyProducts = [
          {
            _id: '1',
            name: 'Hand-woven Bamboo Basket',
            description: 'Traditional hand-woven basket made from sustainable bamboo materials',
            price: 45.99,
            images: ['/api/placeholder/300/300'],
            rating: 4.5,
            numReviews: 12,
            craftType: 'Weaving',
            region: 'Southeast Asia'
          },
          {
            _id: '2',
            name: 'Ceramic Tea Set',
            description: 'Handcrafted ceramic tea set with traditional patterns',
            price: 89.99,
            images: ['/api/placeholder/300/300'],
            rating: 5.0,
            numReviews: 24,
            craftType: 'Pottery',
            region: 'East Asia'
          },
          {
            _id: '3',
            name: 'Embroidered Wall Hanging',
            description: 'Beautiful hand-embroidered wall decoration with floral patterns',
            price: 129.99,
            images: ['/api/placeholder/300/300'], 
            rating: 4.8,
            numReviews: 9,
            craftType: 'Embroidery',
            region: 'South Asia'
          },
          {
            _id: '4',
            name: 'Carved Wooden Sculpture',
            description: 'Intricately carved wooden sculpture depicting local wildlife',
            price: 199.99,
            images: ['/api/placeholder/300/300'],
            rating: 4.9,
            numReviews: 7,
            craftType: 'Wood Carving',
            region: 'Africa'
          },
          {
            _id: '5',
            name: 'Hand-painted Silk Scarf',
            description: 'Elegant hand-painted silk scarf with traditional motifs',
            price: 79.99,
            images: ['/api/placeholder/300/300'],
            rating: 4.7,
            numReviews: 15,
            craftType: 'Silk Painting',
            region: 'East Asia'
          },
          {
            _id: '6',
            name: 'Handmade Leather Journal',
            description: 'Rustic leather journal with handmade paper pages',
            price: 35.99,
            images: ['/api/placeholder/300/300'],
            rating: 4.6,
            numReviews: 18,
            craftType: 'Leatherwork',
            region: 'Europe'
          }
        ];
        
        setProducts(dummyProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Artisan Crafts Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link to={`/details/${product._id}`} className="block">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
                
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({product.numReviews})</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500">{product.region}</span>
                </div>
                
                <div className="mt-4">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{product.craftType}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
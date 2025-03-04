import React, { useState } from 'react';
import { Heart, ShoppingCart, ArrowLeft, Star, Clock, Info, Globe, Tag, Scale, Ruler } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Sample product data based on your schema
const demoProduct = {
  _id: "65f3d24a8b14d987654321",
  name: "Handcrafted Ceramic Vase",
  description: "This beautiful handcrafted ceramic vase is made using traditional techniques passed down through generations. Each piece is unique with subtle variations in color and texture, showcasing the skilled craftsmanship of artisans from the region.",
  price: 79.99,
  images: [
    "/api/placeholder/500/500",
    "/api/placeholder/500/500",
    "/api/placeholder/500/500",
  ],
  category: {
    _id: "65f3d24a8b14d123456789",
    name: "Home Decor"
  },
  countInStock: 12,
  rating: 4.7,
  numReviews: 28,
  isFeatured: true,
  isActive: true,
  materials: ["Clay", "Natural Glazes", "Organic Pigments"],
  dimensions: {
    length: 25,
    width: 25,
    height: 30,
    unit: "cm"
  },
  weight: {
    value: 1200,
    unit: "g"
  },
  tags: ["Handmade", "Sustainable", "Traditional", "Home Decor"],
  craftType: "Pottery",
  region: "Northern Thailand",
  seller: {
    _id: "65f3d24a8b14d567890123",
    name: "ArtisanCollective",
    rating: 4.9
  },
  createdAt: "2024-12-15T08:30:00.000Z"
};

// Helper function to format dates
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const ProductDetailsPage = () => {
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // This function will be replaced with actual API call when backend is ready
  const fetchProduct = async (id) => {
    // Simulating API fetch delay
    console.log(`Fetching product with ID: ${id}`);
    return new Promise(resolve => setTimeout(() => resolve(demoProduct), 300));
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= demoProduct.countInStock) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${demoProduct.name} to cart`);
    // This will be replaced with actual cart functionality
  };

  const handleBuyNow = () => {
    console.log(`Proceeding to checkout with ${quantity} of ${demoProduct.name}`);
    // This will be replaced with actual checkout functionality
  };
  const navigate = useNavigate()
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
      {/* Navigation */}
      <div className="mb-6">
        <button onClick={()=> navigate('/products')} className="flex items-center text-gray-600 hover:text-gray-800">
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </button>
      </div>

      {/* Product Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <img 
              src={demoProduct.images[mainImage]} 
              alt={demoProduct.name} 
              className="object-contain h-full w-full" 
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {demoProduct.images.map((img, index) => (
              <div 
                key={index} 
                className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${mainImage === index ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => setMainImage(index)}
              >
                <img 
                  src={img} 
                  alt={`${demoProduct.name} thumbnail ${index + 1}`} 
                  className="object-cover w-full h-full" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <div className="text-sm text-gray-500 mb-1">{demoProduct.category.name}</div>
            <h1 className="text-3xl font-bold text-gray-900">{demoProduct.name}</h1>
            
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < Math.floor(demoProduct.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
                {/* {demoProduct.rating % 1 > 0 && (
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                )} */}
              </div>
              <span className="ml-2 text-sm text-gray-600">{demoProduct.rating} ({demoProduct.numReviews} reviews)</span>
            </div>
          </div>

          <div className="text-2xl font-bold text-gray-900">${demoProduct.price.toFixed(2)}</div>

          <div className="border-t border-[#a76130] border-b py-4">
            <div className="text-sm font-medium text-gray-500 mb-2">Description</div>
            <p className="text-gray-700">{demoProduct.description}</p>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock size={16} className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-700">Added on {formatDate(demoProduct.createdAt)}</span>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-medium ${demoProduct.countInStock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {demoProduct.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </div>
            </div>

            {demoProduct.countInStock > 0 && (
              <div className="flex items-center space-x-2">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max={demoProduct.countInStock}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 py-1 px-2 border border-gray-300 rounded text-center"
                />
                <span className="text-sm text-gray-500">
                  ({demoProduct.countInStock} available)
                </span>
              </div>
            )}

            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={demoProduct.countInStock === 0}
                className="flex-1 bg-[#bf4221] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-[#a3361a] disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                disabled={demoProduct.countInStock === 0}
                className="flex-1 bg-gray-800 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-gray-900 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Buy Now
              </button>
              <button className="bg-gray-100 text-gray-700 p-3 rounded-lg flex items-center justify-center hover:bg-gray-200">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Specifications */}
      <div className="mt-12 border-t border-[#a76130] pt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Product Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start">
              <Info size={18} className="text-gray-500 mr-3 mt-1" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Materials</h3>
                <p className="text-gray-700">{demoProduct.materials.join(', ')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Ruler size={18} className="text-gray-500 mr-3 mt-1" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Dimensions</h3>
                <p className="text-gray-700">
                  {demoProduct.dimensions.length} × {demoProduct.dimensions.width} × {demoProduct.dimensions.height} {demoProduct.dimensions.unit}
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Scale size={18} className="text-gray-500 mr-3 mt-1" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Weight</h3>
                <p className="text-gray-700">{demoProduct.weight.value} {demoProduct.weight.unit}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <Globe size={18} className="text-gray-500 mr-3 mt-1" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Region</h3>
                <p className="text-gray-700">{demoProduct.region}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Info size={18} className="text-gray-500 mr-3 mt-1" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Craft Type</h3>
                <p className="text-gray-700">{demoProduct.craftType}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Tag size={18} className="text-gray-500 mr-3 mt-1" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Tags</h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {demoProduct.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seller Information */}
      <div className="mt-12 border-t border-[#a76130] pt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Seller Information</h2>
        <div className="flex items-center">
          <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center text-gray-500 mr-4">
            {demoProduct.seller.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-medium">{demoProduct.seller.name}</h3>
            <div className="flex items-center mt-1">
              <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
              <span className="text-sm text-gray-600">{demoProduct.seller.rating} Seller Rating</span>
            </div>
          </div>
          <button className="ml-auto bg-white text-[#8b5d3b] border border-[#8b5d3b] px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50">
            View Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
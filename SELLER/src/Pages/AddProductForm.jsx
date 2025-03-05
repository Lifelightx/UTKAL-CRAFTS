import React, { useState } from 'react';
import { 
  Save, 
  Upload, 
  PlusCircle, 
  Trash2, 
  Tag, 
  
  IndianRupee,
  TextSelection, 
  Ruler, 
  Box, 
  Globe 
} from 'lucide-react';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    images: [],
    category: '',
    countInStock: '',
    materials: [],
    dimensions: {
      length: '',
      width: '',
      height: '',
      unit: 'cm'
    },
    weight: {
      value: '',
      unit: 'g'
    },
    tags: [],
    craftType: '',
    region: '',
    isFeatured: false,
    isActive: true
  });

  const [newTag, setNewTag] = useState('');
  const [newMaterial, setNewMaterial] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle nested objects
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setProductData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setProductData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setProductData(prev => ({
      ...prev,
      images: [...prev.images, ...imageUrls]
    }));
  };

  const removeImage = (index) => {
    setProductData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const addTag = () => {
    if (newTag && !productData.tags.includes(newTag)) {
      setProductData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag]
      }));
      setNewTag('');
    }
  };

  const addMaterial = () => {
    if (newMaterial && !productData.materials.includes(newMaterial)) {
      setProductData(prev => ({
        ...prev,
        materials: [...prev.materials, newMaterial]
      }));
      setNewMaterial('');
    }
  };

  const removeTag = (tagToRemove) => {
    setProductData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const removeMaterial = (materialToRemove) => {
    setProductData(prev => ({
      ...prev,
      materials: prev.materials.filter(material => material !== materialToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement product submission logic
    
    console.log('Product Data:', productData);
  };

  return (
    <div className="container mx-auto px-24 py-10 bg-gray-50 min-h-screen">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add New Product
        </h2>

        {/* Basic Product Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="flex font-semibold items-center mb-2 text-gray-700">
              <TextSelection className="mr-2 text-blue-500" />
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="form-group">
            <label className="flex items-center font-semibold mb-2 text-gray-700">
              <IndianRupee className="mr-2 text-green-500" />
              Price
            </label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter price"
              required
              min="0"
              step="0.01"
            />
          </div>
        </div>

        {/* Description */}
        <div className="form-group">
          <label className="flex items-center font-semibold mb-2 text-gray-700">
            <TextSelection className="mr-2 text-purple-500" />
            Description
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Describe your product"
            rows="4"
            required
          />
        </div>

        {/* Images Upload */}
        <div className="form-group">
          <label className="flex items-center font-semibold mb-2 text-gray-700">
            <Upload className="mr-2 text-indigo-500" />
            Product Images
          </label>
          <div className="flex items-center">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label 
              htmlFor="image-upload" 
              className="flex items-center font-semibold px-4 py-2 bg-indigo-500 text-white rounded-md cursor-pointer hover:bg-indigo-600"
            >
              <PlusCircle className="mr-2" /> Upload Images
            </label>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index} className="relative">
                <img 
                  src={image} 
                  alt={`Product ${index + 1}`} 
                  className="w-24 h-24 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center font-semibold mb-2 text-gray-700">
              <Box className="mr-2 text-teal-500" />
              Count in Stock
            </label>
            <input
              type="number"
              name="countInStock"
              value={productData.countInStock}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter stock quantity"
              min="0"
              required
            />
          </div>

          <div>
            <label className="flex items-center font-semibold mb-2 text-gray-700">
              <Globe className="mr-2 text-amber-500" />
              Region of Origin
            </label>
            <input
              type="text"
              name="region"
              value={productData.region}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter region"
              required
            />
          </div>
        </div>

        {/* Dimensions */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="flex items-center font-semibold mb-2 text-gray-700">
              <Ruler className="mr-2 text-pink-500" />
              Length
            </label>
            <input
              type="number"
              name="dimensions.length"
              value={productData.dimensions.length}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Length"
              min="0"
            />
          </div>
          <div>
            <label className='font-semibold text-gray-700'>Width</label>
            <input
              type="number"
              name="dimensions.width"
              value={productData.dimensions.width}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Width"
              min="0"
            />
          </div>
          <div>
            <label className='font-semibold text-gray-700'>Height</label>
            <input
              type="number"
              name="dimensions.height"
              value={productData.dimensions.height}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Height"
              min="0"
            />
          </div>
          <div>
            <label className='font-semibold text-gray-700'>Dimension Unit</label>
            <select
              name="dimensions.unit"
              value={productData.dimensions.unit}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="cm">Centimeters</option>
              <option value="inch">Inches</option>
            </select>
          </div>
        </div>

        {/* Tags and Materials */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center font-semibold mb-2 text-gray-700">
              <Tag className="mr-2 text-cyan-500" />
              Product Tags
            </label>
            <div className="flex">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="flex-grow px-4 py-2 border rounded-l-md"
                placeholder="Add a tag"
              />
              <button
                type="button"
                onClick={addTag}
                className="bg-cyan-500 text-white px-4 py-2 font-semibold rounded-r-md hover:bg-cyan-600"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {productData.tags.map(tag => (
                <span 
                  key={tag} 
                  className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-sm flex items-center"
                >
                  {tag}
                  <button 
                    onClick={() => removeTag(tag)}
                    className="ml-2 text-cyan-500 hover:text-cyan-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center font-semibold mb-2 text-gray-700">
              <Box className="mr-2 text-orange-500" />
              Materials
            </label>
            <div className="flex">
              <input
                type="text"
                value={newMaterial}
                onChange={(e) => setNewMaterial(e.target.value)}
                className="flex-grow px-4 py-2 border rounded-l-md"
                placeholder="Add a material"
              />
              <button
                type="button"
                onClick={addMaterial}
                className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {productData.materials.map(material => (
                <span 
                  key={material} 
                  className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm flex items-center"
                >
                  {material}
                  <button 
                    onClick={() => removeMaterial(material)}
                    className="ml-2 text-orange-500 hover:text-orange-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Options */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center font-semibold mb-2 text-gray-700">
              Craft Type
            </label>
            <input
              type="text"
              name="craftType"
              value={productData.craftType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter craft type"
              required
            />
          </div>
          <div className="flex items-center space-x-4 mt-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isFeatured"
                checked={productData.isFeatured}
                onChange={handleChange}
                className="mr-2"
              />
              Featured Product
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isActive"
                checked={productData.isActive}
                onChange={handleChange}
                className="mr-2"
              />
              Active Product
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center mx-auto"
          >
            <Save className="mr-2" /> Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
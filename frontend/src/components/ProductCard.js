import React from 'react';

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="border p-4 rounded-lg bg-white shadow flex flex-col items-center">
      <img
        src={product.image_url || '/placeholder.png'}
        alt={product.name}
        className="w-full h-32 object-cover rounded mb-2"
        onError={e => { e.target.onerror = null; e.target.src = '/placeholder.png'; }}
      />
      <h3 className="text-lg font-semibold mt-2 text-center">{product.name}</h3>
      <p className="text-gray-600 text-center">₹{product.price}</p>
      <p className="text-sm text-gray-500 text-center">Rating: {product.rating}/5</p>
      <p className="text-sm text-gray-500 text-center">Stock: {product.stock}</p>
    </div>
  );
}

export default ProductCard;
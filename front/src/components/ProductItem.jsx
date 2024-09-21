import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-900 cursor-pointer" to={`/product/${id}`}>
      <div className="border-separate bg-white border-black p-4 rounded-s-3xl overflow-hidden transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300 ease-in-out">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition-transform duration-300 ease-in-out w-full h-auto rounded-lg"
            src={image[0]}
            alt={name}
          />
        </div>

        {/* Product Name */}
        <p className="pt-3 pb-1 text-sm font-medium truncate">{name}</p>

        {/* Price */}
        <p className=" text-sm font-bold text-red-900">
          {currency}{price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;

import React, {
  useEffect,
  useState,
} from 'react';

import {
  FaSearch,
  FaSlidersH,
} from 'react-icons/fa';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import background from '../../images/gaelle-marcel-Y1kFBWWzOP4-unsplash.jpg';

function ProductCard({ product }) {
  return (
    <div className="rounded-xl font-['Raleway'] w-full border-[1.5px] mt-5 border-[#f3f3f3]">
      <div className="w-full">
        <img
          className="w-full rounded-xl"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="w-full p-3">
        <h2 className="name font-bold text-[#797d81]">{product.name}</h2>
        <p className="description text-sm text-[#707378]">
          {product.description}
        </p>
        <p className="price font-extrabold text-lg">${product.price}</p>
        <p className="category">{product.category}</p>
      </div>
    </div>
  );
}

const LoadingSkeleton = () => {
  return (
    <div className="rounded-xl font-['Raleway'] w-full border-[1.5px] mt-5 border-[#f3f3f3]">
      <div className="w-full bg-gray-200 animate-pulse">
        <div className="h-40"></div>
      </div>
      <div className="w-full p-3">
        <div className="h-4 bg-gray-200 animate-pulse mb-2"></div>
        <div className="h-3 bg-gray-200 animate-pulse mb-2"></div>
        <div className="h-8 bg-gray-200 animate-pulse mb-2"></div>
        <div className="h-3 bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
};

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show loading screens
    setTimeout(() => {
      fetch("https://webuyam.onrender.com/api/products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setFilteredProducts(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
          setError("Error fetching data.");
        });
    }, 2000); // Simulate a 2-second delay
  }, []);

  useEffect(() => {
    // Filter products based on search query
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(filtered);

    // Check if there are no search results
    if (filtered.length === 0 && searchQuery !== "") {
      setError("No matching products found.");
    } else {
      setError("");
    }
  }, [searchQuery, products]);

  return (
    <div className="font-['Raleway']">
      <div className="relative w-full h-full">
        <img className="object-cover w-full h-full" src={background} alt="" />
      </div>
      <div className="absolute inset-0 flex">
        <div className="basis-[10%] h-full">
          <Sidebar />
        </div>
        <div className="basis-[90%]">
          <Navbar />
          <div className="mt-8 pl-20 pr-14 w-full">
            <header className="w-full">
              <h1 className="text-[24px] leading-[34px] font-semibold text-white">
                Products
              </h1>
              <p className="text-white uppercase text-[10px] font-extralight">
                webuy/product/products
              </p>
            </header>
            <div className="relative w-full h-full flex flex-col p-5 mt-5 bg-white rounded-xl">
              <div className="relative w-full">
                <input
                  className="w-full pl-8 pr-12 py-2 border-2 border-[#f3f3f3] rounded-xl text-xs"
                  type="text"
                  name="search"
                  value={searchQuery}
                  placeholder="Search products..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#c3c2c2] text-xs" />
                <FaSlidersH className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xs" />
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                {isLoading
                  ? Array(4)
                      .fill()
                      .map((_, index) => <LoadingSkeleton key={index} />)
                  : filteredProducts.map((product, index) => (
                      <ProductCard key={index} product={product} />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

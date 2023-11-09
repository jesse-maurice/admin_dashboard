import { useState } from 'react';

import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaAngleDown,
  FaBold,
  FaFont,
  FaInfoCircle,
  FaItalic,
  FaPlusCircle,
  FaSortDown,
  FaUnderline,
} from 'react-icons/fa';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import background from '../../images/gaelle-marcel-Y1kFBWWzOP4-unsplash.jpg';

const AddProducts = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [price, setPrice] = useState(""); // State to store the input value
  const [selectedCurrency, setSelectedCurrency] = useState("dollar"); // Default currency

  const applyUppercase = () => {
    setProductDescription((prevDescription) => {
      if (prevDescription === prevDescription.toUpperCase()) {
        return prevDescription.toLowerCase(); // If text is already uppercase, make it normal
      } else {
        return prevDescription.toUpperCase(); // If text is not uppercase, make it uppercase
      }
    });
  };


  const applyBold = () => {
    const textarea = document.getElementById("myTextarea"); // Replace 'myTextarea' with the actual ID of your textarea
    textarea.classList.toggle("bold-text");
  };


  const applyItalic = () => {
    const textarea = document.getElementById("myTextarea");
    const currentFontStyle = getComputedStyle(textarea).fontStyle;
    textarea.style.fontStyle =
      currentFontStyle === "italic" ? "normal" : "italic";
  };

  const applyUnderline = () => {
    const textarea = document.getElementById("myTextarea"); // Replace 'myTextarea' with the actual ID of your textarea
    textarea.classList.toggle("underline-text");
  };


 const applyAlignment = (alignment) => {
   const textarea = document.getElementById("myTextarea"); // Replace 'myTextarea' with the actual ID of your textarea
   textarea.style.textAlign = alignment;
 };



  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  }

  const handleProductDescription = (e) => {
    setProductDescription(e.target.value);
  }

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
  };

  // Define a mapping of currency symbols

  const currencyOptions = [
    { value: "dollar", label: "$" },
    { value: "naira", label: "₦" },
    { value: "franc", label: "Fr" },
  ];

  const categoryOptions = [
    {value: '', label: 'category', disabled: true, hidden: true},
    { value: "computers", label: "computers" },
    { value: "groceries", label: "groceries" },
  ];

  return (
    <div className=" font-['Raleway']">
      <div className="relative w-full h-full">
        <img
          className="object-cover w-full h-full "
          src={background}
          alt=""
        ></img>
      </div>
      <div className="absolute inset-0 flex">
        <div className=" basis-[10%] h-full">
          <Sidebar />
        </div>
        <div className=" basis-[90%] ">
          <Navbar />
          <div className=" mt-8 pl-20 pr-14 w-full h-full">
            <header className=" w-full">
              <h1 className=" text-[24px] leading-[34px] font-semibold text-white  ">
                Add Product
              </h1>
              <p className=" text-white uppercase text-[10px] font-extralight">
                webuy/product/add products
              </p>
            </header>
            <div className=" w-full h-full flex mt-8 flex-row content-center justify-between gap-6">
              <section className=" flex flex-col content-center gap-8">
                <div className="flex content-center items-center justify-center w-[150px] h-[150px] bg-white rounded-lg">
                  <FaPlusCircle size={"40"} style={{ color: "#009b4d" }} />
                </div>
                <div className="flex content-center items-center justify-center w-[150px] h-[150px] bg-white rounded-lg">
                  <FaPlusCircle size={"40"} style={{ color: "#009b4d" }} />
                </div>
                <div className="flex content-center items-center justify-center w-[150px] h-[150px] bg-white rounded-lg">
                  <FaPlusCircle size={"40"} style={{ color: "#009b4d" }} />
                </div>
                <div className="flex content-center items-center justify-center w-[150px] h-[150px] bg-white rounded-lg">
                  <FaPlusCircle size={"40"} style={{ color: "#009b4d" }} />
                </div>
              </section>
              <section className=" w-[350px] h-full bg-white rounded-lg"></section>
              <section className=" flex flex-col content-center w-[450px] h-full bg-white rounded-lg py-4 px-6">
                <div className=" w-full flex flex-col content-center">
                  <div className="w-full flex flex-row content-center justify-between">
                    <h2 className=" font-medium text-base text-[#565454]">
                      Product name
                    </h2>
                    <FaInfoCircle style={{ color: "#565454" }} />
                  </div>
                  <div className="w-full mt-2 text-center flex content-center items-center ">
                    <input
                      className=" w-full pl-5 text-[#009b4d] font-semibold bg-[#f6f6f6] h-10 rounded-lg"
                      placeholder="Product name"
                      type="text"
                      name="product"
                      value={productName}
                      onChange={handleProductNameChange}
                    ></input>
                  </div>
                </div>
                <div className="w-full flex flex-col content-center mt-6">
                  <div className="w-full flex flex-row content-center justify-between">
                    <h2 className=" font-medium text-base text-[#565454]">
                      Description
                    </h2>
                    <FaInfoCircle style={{ color: "#565454" }} />
                  </div>
                  <div className=" w-full mt-2">
                    <div className="w-full flex content-center items-center rounded-t-lg border-b-[1px] border-black h-[40px] py-2 bg-[#f3f3f3] px-5">
                      <button onClick={applyUppercase}>
                        <FaFont />
                      </button>
                      <FaSortDown className="ml-1" />
                      <div className="divider w-[1.5px] mx-3 rounded-full h-full bg-[#cbc8c8]"></div>
                      <button onClick={applyBold}>
                        <FaBold />
                      </button>
                      <button onClick={applyItalic}>
                        <FaItalic className="mx-5" />
                      </button>
                      <button onClick={applyUnderline}>
                        <FaUnderline />
                      </button>
                      <div className="divider w-[1.5px] mx-3 rounded-full h-full bg-[#cbc8c8]"></div>
                      <button onClick={() => applyAlignment("left")}>
                        <FaAlignLeft />
                      </button>
                      <button onClick={() => applyAlignment("center")}>
                        <FaAlignCenter className="mx-5" />
                      </button>
                      <button onClick={() => applyAlignment("right")}>
                        <FaAlignRight />
                      </button>
                      <button onClick={() => applyAlignment("justify")}>
                        <FaAlignJustify className="mx-5" />
                      </button>
                    </div>
                    <div className=" w-full rounded-b-lg bg-[#f3f3f3]">
                      <textarea
                        id="myTextarea"
                        className="w-full h-full p-3 bg-[#f3f3f3] text-[#6f6d6d] text-sm rounded-b-lg"
                        placeholder="Product description"
                        value={productDescription}
                        onChange={handleProductDescription}
                        rows={4}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className=" w-full flex mt-6 content-center gap-11">
                  <div className=" w-full flex flex-col">
                    <h2 className="font-medium text-base text-[#565454]">
                      Quantity
                    </h2>
                    <input
                      className=" w-full h-10 bg-[#f6f6f6] text-[#6f6d6d] pl-5 rounded-lg mt-2"
                      placeholder="no of quantity"
                      type="number"
                      name="quantity"
                      value={quantity}
                      onChange={handleQuantityChange}
                    ></input>
                  </div>
                  <div className=" w-full flex flex-col">
                    <h2 className="font-medium text-base text-[#565454]">
                      Category
                    </h2>
                    <div className="relative mt-2">
                      <select
                        className="w-full pl-5 pr-10 h-10 bg-[#f6f6f6] text-[#6f6d6d] rounded-lg"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                      >
                        {categoryOptions.map((option) => (
                          <option
                            key={option.value}
                            disabled={option.disabled}
                            hidden={option.hidden}
                            value={option.value}
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className=" w-full flex mt-6 content-center gap-11">
                  <div className=" w-full flex flex-col">
                    <h2 className="font-medium text-base text-[#565454]">
                      Price per unit
                    </h2>
                    <div className="relative mt-2">
                      <input
                        className="w-full h-10 bg-[#f6f6f6] text-[#6f6d6d] pl-5 rounded-lg pr-10"
                        placeholder="Price per unit"
                        type="number"
                        name="price"
                        value={price}
                        onChange={handlePriceChange}
                      />
                      <div className="absolute right-2 top-2">
                        <FaAngleDown size={20} style={{ color: "#6f6d6d" }} />
                      </div>
                      <select
                        className="absolute right-0 w-10 h-10 bg-[#f6f6f6] text-[#6f6d6d] rounded-r-lg"
                        value={selectedCurrency}
                        onChange={handleCurrencyChange}
                      >
                        {currencyOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className=" w-full flex flex-col">
                    <h2 className="font-medium text-base text-[#565454]">
                      Discount
                    </h2>
                    <input
                      className=" w-full h-10 bg-[#f6f6f6] text-[#6f6d6d] pl-5 rounded-lg mt-2"
                      placeholder="discount"
                      type="number"
                      name="discount"
                      value={discount}
                      onChange={handleDiscountChange}
                    ></input>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts
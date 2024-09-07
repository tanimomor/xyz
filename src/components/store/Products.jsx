import products from "./products.json";
import PageNav from "./PageNav.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import {useContext, useEffect, useState} from "react";

export default function Products() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    // Access cart context
    const { cart, addToCart } = useContext(CartContext);

    useEffect(() => {
        console.log('cart', cart);
    }, [cart]);

    // Calculate the products to display on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Function to handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {currentProducts.map((product, index) => {
                        // Determine the styles based on the index
                        const isFirstOrSecond = index % 3 !== 2; // First or second in the row
                        const isThird = index % 3 === 2; // Third in the row

                        const itemClasses = `flex flex-col items-center justify-between rounded-2xl border border-solid border-neutral-100 p-4 
                            ${isFirstOrSecond ? 'mb-[64px] mr-4' : ''}
                            ${isThird ? 'mb-[64px]' : ''}
                        `;

                        return (
                            <div
                                key={product.id}
                                className={itemClasses}
                                style={{ width: '277px', height: '484px' }}
                            >
                                <div
                                    className="flex items-center justify-center rounded-lg bg-neutral-100 w-[245px] h-[236px]"
                                >
                                    <img
                                        src={product.image}
                                        loading="lazy"
                                        className="w-[205px] h-[205px]"
                                        alt={product.name}
                                    />
                                </div>
                                <div className="mt-8 w-full">
                                    <div className="text-[18px] font-semibold leading-[normal] text-[#343434]">
                                        {product.name}
                                    </div>
                                </div>

                                <div
                                    className="flex w-full items-center justify-between gap-x-2 leading-[normal] mt-4"
                                >
                                    <div className="font-bold text-[18px] text-neutral-700">€{product.price}</div>
                                    <div className="font-medium text-[18px] text-[darkgray] line-through">
                                        €{product.originalPrice}
                                    </div>
                                    <div className="font-semibold text-[18px] text-[firebrick]">
                                        {product.discount}
                                    </div>
                                </div>
                                <div className="flex items-center justify-center leading-[normal] text-[gray] mt-4">
                                    <p className="text-[14px]">{product.description}</p>
                                </div>

                                <button
                                    className="font-semibold h-[42px] w-full leading-[normal] text-[16px] text-white rounded-[5px] bg-[#202020] mt-8 flex items-center justify-center gap-x-2"
                                    onClick={() => addToCart(product)}
                                >
                                    <img src="../../../public/assets/logo/products/Basket.png" alt="Basket Icon" className="mr-1" />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        );
                    })}
                </div>
                <PageNav
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </>
    );
}

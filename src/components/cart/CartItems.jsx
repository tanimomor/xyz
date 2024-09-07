import { useContext } from 'react';
import { CartContext } from "../../context/CartContext.jsx";
import { SingleItem } from "./SingleItem.jsx";

export default function CartItems() {
    const { cart, removeFromCart } = useContext(CartContext);

    // Calculate subtotal
    const subtotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    for(var i = 0; i < cart.length; i++) {
        console.log('xyz', cart[i])
    }

    console.log('Cart:::', cart);
    console.log('subtotal:::', subtotal);

    // Format subtotal for display
    const formattedSubtotal = subtotal.toFixed(2); // e.g., "1071.00"

    return (
        <div id="firejet-html-app">
            <div className="font-barlow relative flex w-full flex-col items-center pt-[74px] leading-[normal] tracking-[0px]">
                <div className="absolute left-2 top-0 flex h-[34px] w-80 flex-shrink-0 items-center text-[28px] font-semibold leading-[normal] text-neutral-900">
                    An overview of your order
                </div>
                <div className="flex flex-grow flex-wrap items-start justify-center gap-x-20 gap-y-20 self-stretch min-[1190px]:flex-nowrap">
                    <div className="flex flex-col items-start justify-center gap-y-6 self-stretch rounded-xl bg-neutral-50 p-6">
                        <div className="flex flex-grow flex-col gap-y-6">
                            <div className="flex flex-col items-start gap-y-6 [max-width:692px]">
                                <object data="/assets/Line.svg" className="h-px flex-shrink-0 self-stretch"></object>
                                {cart.length === 0 ? (
                                    <SingleItem name="No Product Added" price="0" quantity="0" />
                                ) : (
                                    cart.map((product) => (
                                        <SingleItem
                                            key={product.id}
                                            id={product.id}
                                            name={product.name}
                                            price={product.price}
                                            image={product.image}
                                            quantity={product.quantity}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2">
                        <div className="flex w-96 flex-col items-center gap-y-6">
                            <div className="flex flex-col items-start justify-center gap-y-3 rounded-xl border border-solid border-x-[gainsboro] border-y-[gainsboro] bg-neutral-50 p-6 text-xl leading-[normal] text-[dimgray]">
                                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-[30px] pr-2 min-[1190px]:flex-nowrap">
                                    <div className="flex w-44 flex-shrink-0 flex-col gap-y-3">
                                        <div>Subtotal</div>
                                        <div>Shipping</div>
                                    </div>
                                    <div className="flex flex-col items-end gap-y-3 text-right font-medium">
                                        <div>€ {formattedSubtotal}</div>
                                        <div>Free</div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-x-36 gap-y-3 pr-2 min-[1190px]:flex-nowrap">
                                    <div className="flex items-center justify-center gap-x-2">
                                        <div>Estimated Tax</div>
                                        <object data="/assets/InformationCircle.svg" className="h-4 w-4 flex-shrink-0"></object>
                                    </div>
                                    <div className="h-6 w-6 flex-shrink-0 font-medium">€ -</div>
                                </div>
                                <div className="flex flex-col justify-end self-stretch pt-[7px] [max-width:332px]">
                                    <object data="/assets/Line1.svg" className="h-px flex-shrink-0"></object>
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-[15px] pt-2 text-2xl font-semibold leading-[normal] min-[1190px]:flex-nowrap">
                                    <div className="w-44 flex-shrink-0">Total</div>
                                    <div className="text-neutral-950">€ {formattedSubtotal}</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center self-stretch rounded-[5px] bg-black p-5">
                                <div className="text-center text-[17px] font-medium uppercase leading-none text-white">
                                    Go to Checkout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute right-52 top-2 flex h-[34px] w-40 flex-shrink-0 items-center text-[28px] font-semibold leading-[normal] text-neutral-900">
                    Order details
                </div>
            </div>
        </div>
    );
}

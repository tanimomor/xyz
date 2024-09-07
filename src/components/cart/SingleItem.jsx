import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

export function SingleItem({ id, name, price, image, quantity }) {
    const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

    return (
        <div className="flex flex-wrap items-start justify-center gap-x-80 gap-y-11 pt-px min-[1190px]:flex-nowrap">
            <div className="flex h-[89px] flex-col items-center">
                <div className="-mb-px flex h-[90px] flex-shrink-0 items-start justify-center gap-x-[15px]">
                    <div className="flex items-center justify-center gap-x-[11px]">
                        <div className="flex items-center justify-center gap-x-2 rounded-md border border-solid border-x-[gainsboro] border-y-[gainsboro] h-[44px] w-[72px]">
                            <button
                                className="text-xl font-bold p-2 text-[#5C5C5C]"
                                onClick={() => decreaseQuantity(id)}
                            >
                                -
                            </button>
                            <div className="text-xl font-semibold leading-[normal] text-neutral-950">
                                {quantity}
                            </div>
                            <button
                                className="text-xl font-bold p-2 text-[#5C5C5C]"
                                onClick={() => increaseQuantity(id)}
                            >
                                +
                            </button>
                        </div>
                        <div className="flex h-[90px] w-[90px] flex-shrink-0 items-center rounded-lg">
                            <div
                                className="flex h-full w-full flex-shrink-0 flex-col items-center overflow-clip rounded-lg border border-solid border-x-[gainsboro] border-y-[gainsboro] bg-neutral-200">
                                <div className="flex h-[88px] w-[88px] flex-shrink-0 items-center">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="h-[87px] w-[88px] object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col items-center pt-[9px]">
                        <div
                            className="absolute left-56 w-96 h-20 font-bold text-[16px] leading-[normal] text-neutral-700">
                            {name}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end gap-y-[72px]">
                <object
                    data="/assets/MultiplicationSign.svg"
                    className="h-6 w-6 flex-shrink-0"
                ></object>
                <div className="text-right text-xl font-semibold leading-[normal] text-neutral-950">
                    €{price}
                </div>
            </div>
        </div>
    );
}

import { ShareIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/24/outline";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const Card = ({ product }) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        console.log(product);
    };

    return (
        <>
            <section className="card relative group rounded-lg">
                <Image width={200} height={200} src={product.img} alt={product.title} className="card-img" />
                <div className="card-details">
                    <h3 className="card-title">{product.title}</h3>
                    <section className="card-reviews flex items-center">
                        {product.score}<StarIcon className="w-5 h-5 text-yellow-500 m-1" />
                        <span className="total-reviews">{product.reviews}</span>
                    </section>
                    <section className="card-price">
                        <div className="price">
                            <del>{product.prevPrice}</del> {product.newPrice}
                        </div>
                    </section>
                </div>
                <div className={`${!isSmallScreen ? "absolute bottom-[70px] left-0 right-0 opacity-0" : "relative bottom-[60px] left-0 right-0"} w-full bg-slate-300 z-20 rounded-b-lg p-4 transform translate-y-full  group-hover:opacity-100 transition-all duration-300`}>
                    <div className="flex items-center">
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex-1">افزودن به سبد</button>
                        <button className="m-2">
                            <ShareIcon className="w-6 h-6 text-red-800" />
                        </button>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Card;
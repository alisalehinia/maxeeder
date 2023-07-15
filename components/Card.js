import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
    return (
        <>
            <section className="card">
                <img src={img} alt={title} className="card-img" />
                <div className="card-details">
                    <h3 className="card-title">{title}</h3>
                    <section className="card-reviews">
                        {star} {star} {star} {star}
                        <span className="total-reviews">{reviews}</span>
                    </section>
                    <section className="card-price">
                        <div className="price">
                            <del>{prevPrice}</del> {newPrice}
                        </div>
                        <div className="bag">
                            <ShoppingCartIcon className="w-6 h-6" />
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Card;
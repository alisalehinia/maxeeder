import Button from "../Button"


const Recommended = ({ handleClick }) => {
    return (
        <>
            <div className="m-2 overflow-scroll">
                <h2 className="recommended-title text-xl font-bold text-slate-700">برند ها</h2>
                <div className="recommended-flex">
                    <Button onClickHandler={handleClick} value="" title="All Products" />
                    <Button onClickHandler={handleClick} value="Nike" title="Nike" />
                    <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
                    <Button onClickHandler={handleClick} value="Puma" title="Puma" />
                    <Button onClickHandler={handleClick} value="Vans" title="Vans" />
                </div>
            </div>
        </>
    );
};

export default Recommended;
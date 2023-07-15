import Input from "../../Input"

const Price = ({ handleChange }) => {
    return (
        <>
            <div className="ml md:w-[16rem] md:px-2">
                <h2 className="sidebar-title price-title">قیمت</h2>

                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test2" />
                    <span className="checkmark"></span>همه
                </label>

                <Input
                    handleChange={handleChange}
                    value={50}
                    title="0 تا 50 تومان"
                    name="test2"
                />

                <Input
                    handleChange={handleChange}
                    value={100}
                    title="50 تا 100 تومان"
                    name="test2"
                />

                <Input
                    handleChange={handleChange}
                    value={150}
                    title="100 تا 150 تومان"
                    name="test2"
                />

                <Input
                    handleChange={handleChange}
                    value={200}
                    title="بیشتر از 150"
                    name="test2"
                />
            </div>
        </>
    );
};

export default Price;
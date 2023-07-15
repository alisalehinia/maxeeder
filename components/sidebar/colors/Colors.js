
import Input from "../../Input"

const Colors = ({ handleChange }) => {
    return (
        <>
            <div className="md:w-[16rem] md:px-2">
                <h2 className="sidebar-title color-title">رنگ</h2>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test1" />
                    <span className="checkmark all"></span>
                    All
                </label>

                <Input
                    handleChange={handleChange}
                    value="black"
                    title="مشکی"
                    name="test1"
                    color="black"
                />

                <Input
                    handleChange={handleChange}
                    value="blue"
                    title="ابی"
                    name="test1"
                    color="blue"
                />

                <Input
                    handleChange={handleChange}
                    value="red"
                    title="قرمز"
                    name="test1"
                    color="red"
                />

                <Input
                    handleChange={handleChange}
                    value="green"
                    title="سبز"
                    name="test1"
                    color="green"
                />

                <label className="sidebar-label-container">
                    <input
                        onChange={handleChange}
                        type="radio"
                        value="white"
                        name="test1"
                    />
                    <span
                        className="checkmark"
                        style={{ background: "white", border: "2px solid black" }}
                    ></span>
                    سفید
                </label>
            </div>
        </>
    );
};

export default Colors;
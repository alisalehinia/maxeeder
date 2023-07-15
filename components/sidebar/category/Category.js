
import Input from "../../Input"

function Category({ handleChange }) {
    return (
        <div className="md:w-[16rem] md:px-2">
            <h2 className="sidebar-title">دسته بندی</h2>

            <div>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test" />
                    <span className="checkmark"></span>همه
                </label>
                <Input
                    handleChange={handleChange}
                    value="sneakers"
                    title="ورزشی"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="flats"
                    title="کفش تخت"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="sandals"
                    title="صندل"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="heels"
                    title="پاشنه دار"
                    name="test"
                />
            </div>
        </div>
    );
}

export default Category;
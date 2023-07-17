import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";


const Sidebar = ({ handleChange, isMobile }) => {

    return (
        <div className="flex flex-col">
            <section className={`${isMobile ? "w-[60%] m-0 " : "md:w-[16rem] m-2 "}  flex h-full bg-slate-100 rounded-lg flex-col items-center`}>
                <div className="MB-4 font-bold text-xl text-slate-800">
                    <h1>فیلتر ها</h1>
                </div>
                <Category handleChange={handleChange} />
                <Price handleChange={handleChange} />
                <Colors handleChange={handleChange} />
            </section>
        </div>
    );
};

export default Sidebar;
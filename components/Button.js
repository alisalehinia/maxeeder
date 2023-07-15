const Button = ({ onClickHandler, value, title }) => {
    return (
        <button className="btn bg-violet-500 text-white text-lg font-light p-2 m-2 " onClick={onClickHandler} value={value} >
            {title}
        </button>
    );
};

export default Button;
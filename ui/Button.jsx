const Button = ({ children, className = '', onClick }) => {
    const classes = '';
    return (
        <button onClick={() => onClick && onClick()} className={`bg-indigo-600 text-white ${className}`}>
            {children}
        </button>
    );
};

export default Button;

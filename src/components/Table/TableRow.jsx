const TableRow = ({children, handleClick, className}) => {
    return (
        <tr className={`bg-white lg:hover:bg-gray-100 mb-10 lg:mb-0 ${className}`} onClick={handleClick}>
            {children}
        </tr>
    );
};

export default TableRow;
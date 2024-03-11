const TableColumn = ({children}) => {
    return (
        <td className="p-3 text-gray-800 text-center border border-b relative">
            {children}
        </td>
    );
};

export default TableColumn;
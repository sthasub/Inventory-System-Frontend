const TableHeader = ({headers}) => {
    return (
        <thead>
        <tr>
            {headers.map((headerItem, index)=> (
                <th key={index} className="p-3 font-bold text-sm uppercase bg-gray-200 text-gray-600 border border-gray-300">
                    {headerItem}
                </th>
            ))}
        </tr>
        </thead>
    );
};

export default TableHeader;
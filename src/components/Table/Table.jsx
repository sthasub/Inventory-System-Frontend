import TableHeader from "@/components/Table/TableHeader.jsx";
import TableBody from "@/components/Table/TableBody.jsx";
import TableRow from "@/components/Table/TableRow.jsx";
import TableColumn from "@/components/Table/TableColumn.jsx";

const Table = ({headers, data, itemsParser, handleOnRowClick, modifyElement}) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="border-collapse w-full">
                <TableHeader headers={headers}/>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index} handleClick={() => handleOnRowClick(item)} className="cursor-pointer">
                            {
                                itemsParser(item).map((itemValue, itemValueIndex) => (
                                    <TableColumn key={itemValueIndex}>
                                        {itemValue}
                                    </TableColumn>
                                ))
                            }
                            <TableColumn>
                                {modifyElement(item)}
                            </TableColumn>

                        </TableRow>
                    ))}

                </TableBody>
            </table>
        </div>
    )
        ;
};

export default Table;
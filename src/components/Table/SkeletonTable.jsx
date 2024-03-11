import TableHeader from "@/components/Table/TableHeader.jsx";
import TableBody from "@/components/Table/TableBody.jsx";
import TableRow from "@/components/Table/TableRow.jsx";
import TableColumn from "@/components/Table/TableColumn.jsx";
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

const SkeletonTable = ({headers=[], rows}) => {
    return (

        <table className="border-collapse w-full">
            <TableHeader headers={headers}/>
            <TableBody>
                {[...Array(rows).keys()].map((item, index) => (
                    <TableRow key={index}>
                        {
                            headers.map((itemValue, itemValueIndex) => (
                                <TableColumn key={itemValueIndex}>
                                    <Skeleton />
                                </TableColumn>
                            ))
                        }
                    </TableRow>
                ))}

            </TableBody>
        </table>

    );
};

export default SkeletonTable;
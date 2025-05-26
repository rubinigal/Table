import type { ColumnVisibleFlags } from "../App";
import type { Column, Row} from "../util/types";
import EditableRow from "./EditableRow";
import { useState } from "react";

const buttonStyles = [
  "inline-block px-4 py-2 bg-transparent text-black font-medium rounded-lg border-2 border-black hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition",
  "inline-block px-4 py-2 bg-gray-300 text-gray-600 font-medium rounded-lg opacity-75"
];

type TableProps = {
  sortedColumns: Column[];
  columnsToggleStatus: ColumnVisibleFlags[];
  rows: Row[];
  numberOfRows: number;
}

function Table({ sortedColumns, columnsToggleStatus, rows, numberOfRows }: TableProps) {
  const [visibleRows, setVisibleRows] = useState<Row[]>([...rows.slice(0, numberOfRows)]);
  const [page, setPage] = useState<number>(0);

  function changePage(nextPage: number) {
    const startIndex = nextPage * numberOfRows;
    const endIndex = Math.min(startIndex + numberOfRows, rows.length);
    setVisibleRows(rows.slice(startIndex, endIndex));
    setPage(nextPage);
  }

  return(
    <div>
      <table className="bg-amber-50 border-b-gray-950 border-2">
        <thead>
          <tr className="border-b-gray-950 border-2">
            {sortedColumns.map((column) => 
              columnsToggleStatus.find(toggle => toggle.id === column.id)?.isVisible && 
              <th 
                className="p-1.5 text-amber-50 bg-gray-950"
                style={{ width: column.width ? `${column.width}px` : 'auto' }}>
                {column.title}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {visibleRows.map(row =>  
            <EditableRow 
              key={row.id} 
              row={row} 
              sortedColumns={sortedColumns} 
              columnsToggleStatus={columnsToggleStatus}
            />
          )}
        </tbody>
      </table>
      <div className="p-2 flex gap-6 justify-center items-center bg-gray-500">
        <button 
          className={page <= 0 ? buttonStyles[1] : buttonStyles[0]}
          disabled={page <= 0} 
          onClick={() => changePage(page - 1)}>{"<"}
        </button>
        <span className="text-[25px]">Page-{page + 1}</span>
        <button 
          className={page >= Math.ceil(rows.length / numberOfRows) - 1 ? buttonStyles[1] : buttonStyles[0]}
          disabled={page >= Math.ceil(rows.length / numberOfRows) - 1} 
          onClick={() => changePage(page + 1)}>{">"}
        </button>
      </div>
    </div>
  )
}

export default Table;

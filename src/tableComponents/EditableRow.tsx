import { useState } from "react";
import type { ColumnVisibleFlags } from "../App";
import type { Column, Row } from "../util/types";
import { genderOptions } from "../util/data";

type EditableRowProps = {
  key: string;
  row: Row;
  sortedColumns: Column[];
  columnsToggleStatus: ColumnVisibleFlags[];
}

function EditableRow({ key, row, sortedColumns, columnsToggleStatus }: EditableRowProps) {
  const [rowState, setRowState] = useState<Row>(row);
  const [editingCell, setEditingCell] = useState<string>("");
  const [editValue, setEditValue] = useState<string | number | boolean | string[] | undefined>("");

  const buildRow = (row: Row) => {
    // we first need to transfer row into an array, removing columns that are not visible 
    const rowCells = [];
    for(const column of columnsToggleStatus) {
      const value = row[column.id];
      if(column.isVisible) {
        rowCells.push({cellId: column.id, value: typeof value === "boolean" ? String(value) : value});
      }
    }

    // the functions editCell and saveEdit are controlling the the states of the cell being changed
    const editCell = (cell: { cellId: string; value: string | boolean | number | string[] | undefined;}) => {
      setEditingCell(cell.cellId);
      setEditValue(cell.value);
    }

    const saveEdit = (cell: { cellId: string; value: string | boolean | number | string[] | undefined; }) => {
      setRowState((prev) => ({ ...prev, [cell.cellId]: editValue}));
      row[cell.cellId] = editValue;
      setEditingCell("");
    }

    // changing the cell into an input cell with the proper type
    const editableCell = (cell: { cellId: string; value: string | number | string[] | undefined; }) => {
      const cellType = sortedColumns.find( column => column.id === cell.cellId)?.type;
      
      if(cellType === "string") {
        return (
          <input
            type="text"
            value={editValue as string}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={() => saveEdit(cell)}
            autoFocus
            className="w-[98%]"
          />
        );
      } else if(cellType === "number") {
        return (
          <input
            type="number"
            value={editValue as number}
            onChange={(e) => setEditValue(Number(e.target.value))}
            onBlur={() => saveEdit(cell)}
            autoFocus
            className="w-[98%]"
          />
        );
      } else if(cellType === "boolean") {
        return (
          <input
            type="checkbox"
            checked={editValue as boolean}
            onChange={(e) => setEditValue(e.target.checked)}
            onBlur={() => saveEdit(cell)}
            autoFocus
            className="transform scale-110"
          />
        );
      } else if(cellType === "selection list") {
        return (
          <select
            value={editValue as string}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={() => saveEdit(cell)}
            autoFocus
            className="w-[98%]"
          >
            {genderOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      }

      // defult return if the type is unknown
      return <span onClick={() => editCell(cell)}>{cell.value}</span>
    }

    return rowCells.map( cell => 
      cell.cellId === editingCell ? 
      <td>{editableCell(cell)}</td> : 
      <td className="border p-0.5 relative" onClick={() => editCell(cell)}>{cell.value}</td>); 
  }

  return (
    <tr key={key}>
      {buildRow(rowState)}
    </tr>
  )
}

export default EditableRow;

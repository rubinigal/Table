import { useState } from 'react'
import './App.css'
import TableColumnsTuggle from './tableComponents/TableColumnsTuggle'
import Table from './tableComponents/Table'
import { columns, rows }  from './util/data'

export type ColumnVisibleFlags = {
  id: string;
  title: string;
  isVisible: boolean;
}

function App() {
  // set max NUMBER_OF_ROWS you want in the table
  const NUMBER_OF_ROWS = 15;
  // we are sorting the columns cause the ordinalNo is important
  const sortedColumns = columns.sort((a,b) => a.ordinalNo - b.ordinalNo);
  const [columnsToggleStatus, setColumnsToggleStatus] = useState<ColumnVisibleFlags[]>(
    sortedColumns.map((column) => ({
      id: column.id,
      title: column.title,
      isVisible: true
    }))
  );

  return (
    <div className='p-20 bg-amber-100 flex flex-col text-center justify-center items-center gap-4 w-screen h-screen'>
      <TableColumnsTuggle 
        columnsToggleStatus={columnsToggleStatus} 
        setColumnsToggleStatus={setColumnsToggleStatus}
      />
      <Table 
        sortedColumns={sortedColumns} 
        columnsToggleStatus={columnsToggleStatus} 
        rows={rows} 
        numberOfRows={NUMBER_OF_ROWS}
      />
    </div>
  )   
}

export default App

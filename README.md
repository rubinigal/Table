React Table Component with Editable Cells and Column Filtering
This project is a reusable React table component built with TypeScript, designed to render various data types, filter columns, and allow direct editing within table cells. It is optimized to handle large datasets efficiently through pagination, making it adaptable for different datasets and use cases.
Features

Flexible Data Rendering: Supports multiple data types per column, including string, number, boolean, and selection list.
Column Filtering: Users can toggle column visibility to show or hide specific columns.
Editable Cells: Data can be edited directly within the table cells using intuitive input controls.
Pagination: Optimized for large datasets by rendering a limited number of rows per page.
Reusable Design: Easily integrates with different datasets, provided they match the expected structure.

Prerequisites

Node.js and npm installed on your system.

Installation

Install Dependencies:npm install


Usage
To integrate the table component into your React project, you need to manage the column visibility state and pass it to both the TableColumnsTuggle and Table components. Below is an example of how to use it:
import { useState } from 'react';
import TableColumnsTuggle from './tableComponents/TableColumnsTuggle';
import Table from './tableComponents/Table';
import { columns, rows } from './util/data';

function MyComponent() {
  const NUMBER_OF_ROWS = 15; // Number of rows per page
  const sortedColumns = columns.sort((a, b) => a.ordinalNo - b.ordinalNo);
  const [columnsToggleStatus, setColumnsToggleStatus] = useState(
    sortedColumns.map((column) => ({
      id: column.id,
      title: column.title,
      isVisible: true,
    }))
  );

  return (
    <div>
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
  );
}


columnsToggleStatus: An array tracking which columns are visible.
setColumnsToggleStatus: Function to update column visibility.
numberOfRows: Controls how many rows are displayed per page.

Data Structure
The table requires two main data structures: columns and rows.
Columns
An array of objects defining each column:

id: string - Unique identifier for the column.
ordinalNo: number - Determines the column’s order.
title: string - Display name of the column.
type: string - Data type (e.g., 'string', 'number', 'boolean', 'selection list').
width: number (optional) - Sets the column width.

Rows
An array of objects representing the table data:

Each object must include an id and properties matching the column ids.

Example:
const columns = [
  { id: 'name', ordinalNo: 1, title: 'Name', type: 'string' },
  { id: 'age', ordinalNo: 2, title: 'Age', type: 'number' },
];

const rows = [
  { id: '1', name: 'John Doe', age: 30 },
  { id: '2', name: 'Jane Smith', age: 25 },
];

Component Architecture
The table is built with modular sub-components:

TableColumnsTuggle: Manages column visibility toggling via checkboxes.
EditableRow: Renders individual rows with editable cells.
Table: The core component that handles pagination and row rendering.

Optimizations

Pagination: Limits the number of rendered rows to improve performance, adjustable via the numberOfRows prop.
Type Safety: TypeScript ensures robust data handling and reduces runtime errors.

Known Issues or Limitations

Local State Only: Edits are stored in component state and reset on page refresh.
No Advanced Features: Lacks server-side pagination, sorting, or searching (these can be added as extensions).

Implementation Details

State Management: Leverages React’s useState hook for managing column visibility and row data.
TypeScript Integration: Provides type definitions for columns, rows, and component props to ensure type safety.
Performance: Pagination ensures efficient rendering for large datasets, preventing performance bottlenecks.


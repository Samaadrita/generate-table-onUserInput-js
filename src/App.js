import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [rows, setRows] = useState();
  const [columns, setColumns] = useState();
  const [generateTab, setGenerateTab] = useState(false);
  const generateTable = () => {
    if (rows === 0 || columns === 0) return;
    else setGenerateTab(true);
  };

  return (
    <div>
      <div className="row-input">
        <label htmlFor="row">Row</label>&ensp;
        <input
          type="text"
          id="row"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
        />
        &ensp;&ensp;<label htmlFor="column">Column</label>&ensp;
        <input
          type="text"
          id="column"
          value={columns}
          onChange={(e) => setColumns(Number(e.target.value))}
        />
        &ensp;&ensp;
        <button className="button-click" onClick={() => generateTable()}>
          Generate table
        </button>
      </div>
      {rows > 0 && columns > 0 && generateTab && (
        <table>
          <thead>
            <tr>
              {[...Array(columns)]?.map((col, index) => (
                <th>Header {index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(rows)]?.map((row, rowIndex) => (
              <tr className="body-row">
                {[...Array(columns)]?.map((col, index) => (
                  <td>
                    Row {rowIndex + 1} Column {index + 1}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

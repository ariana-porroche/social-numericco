import { useState } from 'react';
import './Table.css';

export default function Table({ columns, data, pageSize = 5, loading }) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(data.length / pageSize);

  const handleNext = () => {
    const nextPageIndex = currentPage + 1;
    if (nextPageIndex < totalPages) {
      setCurrentPage(nextPageIndex);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const currentData = data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <div className="table-wrapper">
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading && currentData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center', padding: '20px' }}>Cargando...</td>
              </tr>
            ) : currentData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center', padding: '20px' }}>No hay datos disponibles.</td>
              </tr>
            ) : (
              currentData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((col, colIndex) => (
                    <td key={colIndex}>
                      {col.render ? col.render(row) : row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="table-pagination">
          <button
            className="pagination-btn"
            onClick={handlePrev}
            disabled={currentPage === 0 || loading}
          >
            Anterior
          </button>
          <span className="pagination-info">
            Página {currentPage + 1} de {totalPages}
          </span>
          <button
            className="pagination-btn"
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1 || loading}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}

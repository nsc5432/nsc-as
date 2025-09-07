import React from 'react';

export interface Column<T> {
    key?: keyof T;
    header: string;
    render?: (row: T) => React.ReactNode; // 필요시 커스텀 렌더링
}

interface TableGridProps<T> {
    data: T[];
    columns: Column<T>[];
}

const TableGrid = <T,>({ data, columns }: TableGridProps<T>) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={String(col.key)}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                        {columns.map((col) => (
                            <td key={String(col.key)}>
                                {col.render
                                    ? col.render(row)
                                    : col.key
                                      ? (row[col.key] as React.ReactNode)
                                      : null}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableGrid;

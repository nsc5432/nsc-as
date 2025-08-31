import type { Student } from './Screen1';

interface TableGridProps {
    students: Student[];
    calcAvg: (s: Student) => number;
}

const TableGrid = ({ students, calcAvg }: TableGridProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>국어</th>
                    <th>영어</th>
                    <th>수학</th>
                    <th>평균</th>
                </tr>
            </thead>
            <tbody>
                {students.map((s) => (
                    <tr>
                        <td>{s.name}</td>
                        <td>{s.kor}</td>
                        <td>{s.eng}</td>
                        <td>{s.math}</td>
                        <td>{calcAvg(s)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableGrid;

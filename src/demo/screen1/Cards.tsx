import type { Student } from './Screen1';

interface CardsProps {
    students: Student[];
    calcAvg: (s: Student) => number;
}

const Cards = ({ students, calcAvg }: CardsProps) => {
    return (
        <>
            {students.map((s) => (
                <div className="student-card">
                    <h3>${s.name}</h3>
                    <p>국어: ${s.kor}</p>
                    <p>영어: ${s.eng}</p>
                    <p>수학: ${s.math}</p>
                    <p>
                        <strong>평균: ${calcAvg(s)}</strong>
                    </p>
                </div>
            ))}
        </>
    );
};

export default Cards;

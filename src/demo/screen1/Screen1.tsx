import BarChart from './BarChart';
import Cards from './Cards';
import LineChart from './LineChart';
import TableGrid from './TableGrid';

export type Student = { name: string; kor: number; eng: number; math: number };

const Screen1 = () => {
    const students = [
        { name: '홍길동', kor: 90, eng: 85, math: 95 },
        { name: '김철수', kor: 80, eng: 70, math: 80 },
        { name: '배진주', kor: 70, eng: 80, math: 97 },
        { name: '박상원', kor: 85, eng: 90, math: 88 },
        { name: '이영희', kor: 75, eng: 95, math: 91 },
    ];

    const calcAvg = (s: Student) => {
        return Math.round((s.kor + s.eng + s.math) / 3);
    };

    return (
        <>
            <div>
                <h2>학생 점수 카드 (테이블 형식)</h2>
                <TableGrid students={students} calcAvg={calcAvg} />
            </div>
            <div>
                <h2>학생 점수 카드 선형 그래프</h2>
                <LineChart students={students} />
            </div>
            <div>
                <h2>학생 점수 카드</h2>
                <Cards students={students} calcAvg={calcAvg} />
            </div>
            <div>
                <h2>점수 변화 추이 (재차트) 막대형 그래프</h2>
                <BarChart students={students} calcAvg={calcAvg} />
            </div>
        </>
    );
};

export default Screen1;

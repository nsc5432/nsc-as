import BarChart from './BarChart';
import CardList, { type CardField } from './CardList';
import LineChart from './LineChart';
import TableGrid, { type Column } from './TableGrid';

export type Student = { name: string; kor: number; eng: number; math: number };

const Screen1 = () => {
    return (
        <>
            <div>
                <h2>학생 점수 카드 (테이블 형식)</h2>
                <TableGrid data={students} columns={tableGridColumns} />
            </div>
            <div>
                <h2>학생 점수 카드 선형 그래프</h2>
                <LineChart
                    data={students}
                    labels={(s) => s.name}
                    title="점수 변화 추이 (선형)"
                    datasets={lineChartDataSets}
                />
            </div>
            <div>
                <h2>학생 점수 카드</h2>
                <CardList data={students} titleKey={(s) => s.name} fields={studentFields} />
            </div>
            <div>
                <h2>점수 변화 추이 (재차트) 막대형 그래프</h2>
                <BarChart students={students} calcAvg={calcAvg} />
            </div>
        </>
    );
};

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

// tableGrid
const tableGridColumns: Column<Student>[] = [
    { key: 'name', header: '이름' },
    { key: 'kor', header: '국어' },
    { key: 'eng', header: '영어' },
    { key: 'math', header: '수학' },
    {
        header: '평균',
        render: (s) => calcAvg(s),
    },
];

// lineChart
const lineChartDataSets = [
    {
        label: '국어',
        data: (s: Student) => s.kor,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
    },
    {
        label: '영어',
        data: (s: Student) => s.eng,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
    },
    {
        label: '수학',
        data: (s: Student) => s.math,
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.1)',
    },
];

// cardList
const studentFields: CardField<Student>[] = [
    { label: '국어', value: (s) => s.kor },
    { label: '영어', value: (s) => s.eng },
    { label: '수학', value: (s) => s.math },
    { label: '평균', value: (s) => <strong>{calcAvg(s)}</strong> },
];

export default Screen1;

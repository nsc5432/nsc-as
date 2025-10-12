import { BarChart, TableGrid, type BarChartDataset, type GridColumn } from 'nsc-practice';
import { Tabs, Tab } from '@mui/material';
import { useState, type SyntheticEvent } from 'react';

import ContentLayout from '../../layout/content/ContentLayout';
import ContentHeader from '../../layout/content/ContentHeader';
import ContentReaction from '../../layout/content/ContentReaction';
import ContentFilter from '../../layout/content/ContentFilter';
import ContentMain from '../../layout/content/ContentMain';

const Screen0 = () => {
    const [tabIdx, setTabIdx] = useState<number>(0);

    const handleTabChange = (_: SyntheticEvent, newValue: number) => {
        setTabIdx(newValue);
    };

    const onSearch = () => {
        alert('SEARCH');
    };

    const onReset = () => {
        alert('RESET');
    };

    return (
        <ContentLayout>
            <ContentHeader title={'정기/부정기 운항 현황'} path={['공식통계', '통계']} />
            <ContentFilter onSearch={onSearch} onReset={onReset}>
                <label className="label-filter">
                    <span className="bullet">기준일자</span>
                    <input type="date" name="" className="textfield-comm" />
                    <span>~</span>
                    <input type="date" name="" className="textfield-comm" />
                </label>
            </ContentFilter>

            <ContentMain>
                <Tabs value={tabIdx} onChange={handleTabChange}>
                    <Tab label="유임승객 수" />
                    <Tab label="화물 및 기타" />
                    <Tab label="환승 및 무임승객" />
                </Tabs>
                {tabIdx === 0 && (
                    <div className="tab-content flex justify-between">
                        <TableGrid wrapperClass="w-45p" data={data} columns={gridColumns1} />
                        <BarChart
                            wrapperClass="w-50p"
                            data={data}
                            labels={(s) => s.alnNm}
                            datasets={barChartDatasets1}
                            title="항공사별 유임승객 수 (Top 10)"
                        />
                    </div>
                )}
                {tabIdx === 1 && (
                    <div className="tab-content flex justify-between">
                        <TableGrid wrapperClass="w-45p" data={data} columns={gridColumns2} />
                        <BarChart
                            wrapperClass="w-50p"
                            data={data}
                            labels={(s) => s.alnNm}
                            datasets={barChartDatasets2}
                            title="항공사별 화물 및 기타 운송량 비교"
                        />
                    </div>
                )}
            </ContentMain>
            <ContentReaction />
        </ContentLayout>
    );
};

export default Screen0;

type AlnBdpsgType = {
    alnNm: string;
    bdpsgCnt: string;
    freeBdpsgCnt: string;
    transferBdpsgCnt: string;
    cargo1: string;
    cargo2: string;
    cargo3: string;
    cargo4: string;
};

const data = [
    {
        alnNm: '대한항공',
        bdpsgCnt: '12,681,221',
        freeBdpsgCnt: '81,460',
        transferBdpsgCnt: '3,792,648',
        cargo1: '1,288,345,058',
        cargo2: '838,261,833',
        cargo3: '14,743,382',
        cargo4: '304,490,926',
    },
    {
        alnNm: '아시아나항공',
        bdpsgCnt: '8,848,748',
        freeBdpsgCnt: '42,194',
        transferBdpsgCnt: '2,062,464',
        cargo1: '587,954,564',
        cargo2: '293,720,281',
        cargo3: '11,486,866',
        cargo4: '177,709,661',
    },
    {
        alnNm: '제주항공',
        bdpsgCnt: '6,227,704',
        freeBdpsgCnt: '42,194',
        transferBdpsgCnt: '2,062,464',
        cargo1: '587,954,564',
        cargo2: '293,720,281',
        cargo3: '11,486,866',
        cargo4: '177,709,661',
    },
    {
        alnNm: '진 에어',
        bdpsgCnt: '4,831,442',
        freeBdpsgCnt: '81,460',
        transferBdpsgCnt: '3,792,648',
        cargo1: '1,288,345,058',
        cargo2: '838,261,833',
        cargo3: '14,743,382',
        cargo4: '304,490,926',
    },
    {
        alnNm: '티웨이항공',
        bdpsgCnt: '4,335,211',
        freeBdpsgCnt: '42,194',
        transferBdpsgCnt: '2,062,464',
        cargo1: '587,954,564',
        cargo2: '293,720,281',
        cargo3: '11,486,866',
        cargo4: '177,709,661',
    },
    {
        alnNm: '비엣제트항공',
        bdpsgCnt: '1,983,773',
        freeBdpsgCnt: '81,460',
        transferBdpsgCnt: '3,792,648',
        cargo1: '1,288,345,058',
        cargo2: '838,261,833',
        cargo3: '14,743,382',
        cargo4: '304,490,926',
    },
    {
        alnNm: '에어서울',
        bdpsgCnt: '1,834,522',
        freeBdpsgCnt: '42,194',
        transferBdpsgCnt: '2,062,464',
        cargo1: '587,954,564',
        cargo2: '293,720,281',
        cargo3: '11,486,866',
        cargo4: '177,709,661',
    },
    {
        alnNm: '에어 부산',
        bdpsgCnt: '1,720,552',
        freeBdpsgCnt: '81,460',
        transferBdpsgCnt: '3,792,648',
        cargo1: '1,288,345,058',
        cargo2: '838,261,833',
        cargo3: '14,743,382',
        cargo4: '304,490,926',
    },
    {
        alnNm: '중국동방항공',
        bdpsgCnt: '1,651,602',
        freeBdpsgCnt: '42,194',
        transferBdpsgCnt: '2,062,464',
        cargo1: '587,954,564',
        cargo2: '293,720,281',
        cargo3: '11,486,866',
        cargo4: '177,709,661',
    },
    {
        alnNm: '이스타 항공',
        bdpsgCnt: '1,573,721',
        freeBdpsgCnt: '81,460',
        transferBdpsgCnt: '3,792,648',
        cargo1: '1,288,345,058',
        cargo2: '838,261,833',
        cargo3: '14,743,382',
        cargo4: '304,490,926',
    },
];

const gridColumns1: GridColumn<AlnBdpsgType>[] = [
    { key: 'alnNm', header: '항공사명' },
    { key: 'bdpsgCnt', header: '유임승객(명)' },
];

const gridColumns2: GridColumn<AlnBdpsgType>[] = [
    { key: 'alnNm', header: '항공사명' },
    { key: 'freeBdpsgCnt', header: '무임승객(명)' },
    { key: 'transferBdpsgCnt', header: '환승객(명)' },
    { key: 'cargo1', header: '항공화물(kg)' },
    { key: 'cargo2', header: '환적화물(kg)' },
    { key: 'cargo3', header: '우편물(kg)' },
    { key: 'cargo4', header: '수하물(kg)' },
];

const barChartDatasets1: BarChartDataset<AlnBdpsgType>[] = [
    {
        label: '유임승객 수',
        data: (s) => Number(s.bdpsgCnt.replaceAll(',', '')),
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
    },
];

const barChartDatasets2: BarChartDataset<AlnBdpsgType>[] = [
    {
        label: '항공화물(kg)',
        data: (s) => Number(s.cargo1.replaceAll(',', '')),
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
    },
    {
        label: '환적화물(kg)',
        data: (s) => Number(s.cargo2.replaceAll(',', '')),
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
    },
    {
        label: '우편물(kg)',
        data: (s) => Number(s.cargo3.replaceAll(',', '')),
        backgroundColor: 'rgba(255, 206, 86, 0.7)',
    },
    {
        label: '수하물(kg)',
        data: (s) => Number(s.cargo4.replaceAll(',', '')),
        backgroundColor: 'rgba(153, 102, 255, 0.7)',
    },
];

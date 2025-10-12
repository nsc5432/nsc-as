import { TableGrid, type GridColumn } from 'nsc-practice';

import ContentLayout from '../../layout/content/ContentLayout';
import ContentHeader from '../../layout/content/ContentHeader';
import ContentReaction from '../../layout/content/ContentReaction';
import ContentFilter from '../../layout/content/ContentFilter';
import ContentMain from '../../layout/content/ContentMain';

const Screen0 = () => {
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
                <div className="tabs">
                    <button className="tab-button active" onClick={() => {}}>
                        유임승객 수
                    </button>
                    <button className="tab-button" onClick={() => {}}>
                        화물 및 기타
                    </button>
                    <button className="tab-button" onClick={() => {}}>
                        환승 및 무임승객
                    </button>
                </div>
                <div id="tab1" className="tab-content active">
                    <TableGrid data={gridData} columns={gridColumns} />
                </div>
            </ContentMain>
            <ContentReaction />
        </ContentLayout>
    );
};

export default Screen0;

const gridData = [
    { alnNm: '대한항공', bdpsgCnt: '12,681,221' },
    { alnNm: '아시아나항공', bdpsgCnt: '8,848,748' },
    { alnNm: '제주항공', bdpsgCnt: '6,227,704' },
    { alnNm: '진 에어', bdpsgCnt: '4,831,442' },
    { alnNm: '티웨이항공', bdpsgCnt: '4,335,211' },
    { alnNm: '비엣제트항공', bdpsgCnt: '1,983,773' },
    { alnNm: '에어서울', bdpsgCnt: '1,834,522' },
    { alnNm: '에어 부산', bdpsgCnt: '1,720,552' },
    { alnNm: '중국동방항공', bdpsgCnt: '1,651,602' },
    { alnNm: '이스타 항공', bdpsgCnt: '1,573,721' },
];

const gridColumns: GridColumn<AlnBdpsgType>[] = [
    { key: 'alnNm', header: '항공사명' },
    { key: 'bdpsgCnt', header: '유임승객 수' },
];

type AlnBdpsgType = {
    alnNm: string;
    bdpsgCnt: string;
};

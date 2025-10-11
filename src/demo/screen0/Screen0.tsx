import ContentLayout from '../../layout/content/ContentLayout';
import reaction_lv5 from '../../assets/icon/reaction_lv5.svg';
import reaction_lv4 from '../../assets/icon/reaction_lv4.svg';
import reaction_lv3 from '../../assets/icon/reaction_lv3.svg';
import reaction_lv2 from '../../assets/icon/reaction_lv2.svg';
import reaction_lv1 from '../../assets/icon/reaction_lv1.svg';
import ContentHeader from '../../layout/content/ContentHeader';

const Screen0 = () => {
    return (
        <ContentLayout>
            <ContentHeader title={'정기/부정기 운항 현황'} path={['공식통계', '통계']} />

            <div className="content-filter">
                <label className="label-filter">
                    <span className="bullet">기준일자</span>
                    <input type="date" name="" className="textfield-comm" />
                    <span>~</span>
                    <input type="date" name="" className="textfield-comm" />
                </label>
                <div className="filter-btns">
                    <button type="submit" className="btn-primary">
                        <i className="icon-search"></i>
                        <span>SEARCH</span>
                    </button>
                    <button type="submit" className="btn-primary">
                        <i className="icon-refresh"></i>
                        <span>초기화</span>
                    </button>
                </div>
            </div>

            <div className="content-main">
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
                    <table>
                        <thead>
                            <tr className="header">
                                <th>항공사명</th>
                                <th>유임승객 수</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>대한항공</td>
                                <td>12,681,221</td>
                            </tr>
                            <tr>
                                <td>아시아나항공</td>
                                <td>8,848,748</td>
                            </tr>
                            <tr>
                                <td>제주항공</td>
                                <td>6,227,704</td>
                            </tr>
                            <tr>
                                <td>진 에어</td>
                                <td>4,831,442</td>
                            </tr>
                            <tr>
                                <td>티웨이항공</td>
                                <td>4,335,211</td>
                            </tr>
                            <tr>
                                <td>비엣제트항공</td>
                                <td>1,983,773</td>
                            </tr>
                            <tr>
                                <td>에어서울</td>
                                <td>1,834,522</td>
                            </tr>
                            <tr>
                                <td>에어 부산</td>
                                <td>1,720,552</td>
                            </tr>
                            <tr>
                                <td>중국동방항공</td>
                                <td>1,651,602</td>
                            </tr>
                            <tr>
                                <td>이스타 항공</td>
                                <td>1,573,721</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <form method="post">
                <div className="content-reaction">
                    <div className="reaction-title">
                        <h3>콘텐츠 개선 조사</h3>
                        <p>더 나은 통계 제공을 위해 소중한 의견을 기다립니다.</p>
                    </div>

                    <div className="reaction-cont">
                        <div className="reaction-total">
                            <img src={reaction_lv5} alt="So Good" />
                            <span>4.5</span>
                        </div>

                        <div className="reaction-user">
                            <div className="reaction-result">
                                <span className="item total">
                                    총<em>13</em>명
                                </span>
                                <span className="item">
                                    <img src={reaction_lv5} alt="So Good" />
                                    <span>10명</span>
                                </span>
                                <span className="item">
                                    <img src={reaction_lv4} alt="Good" />
                                    <span>2명</span>
                                </span>
                                <span className="item">
                                    <img src={reaction_lv3} alt="Normal" />
                                    <span>1명</span>
                                </span>
                                <span className="item">
                                    <img src={reaction_lv2} alt="Bad" />
                                    <span>0명</span>
                                </span>
                                <span className="item">
                                    <img src={reaction_lv1} alt="So Bad" />
                                    <span>0명</span>
                                </span>
                            </div>
                            <div className="reaction-selects">
                                <label className="item">
                                    <span>만족도</span>
                                    <div className="select-comm">
                                        <select name="select">
                                            <option>5</option>
                                            <option>4</option>
                                            <option>3</option>
                                            <option>2</option>
                                            <option>1</option>
                                        </select>
                                    </div>
                                </label>

                                <label className="item">
                                    <span>활용성</span>
                                    <div className="select-comm">
                                        <select name="select">
                                            <option>5</option>
                                            <option>4</option>
                                            <option>3</option>
                                            <option>2</option>
                                            <option>1</option>
                                        </select>
                                    </div>
                                </label>

                                <label className="item">
                                    <span>이해용이</span>
                                    <div className="select-comm">
                                        <select name="select">
                                            <option>5</option>
                                            <option>4</option>
                                            <option>3</option>
                                            <option>2</option>
                                            <option>1</option>
                                        </select>
                                    </div>
                                </label>

                                <label className="item">
                                    <span>정보가치</span>
                                    <div className="select-comm">
                                        <select name="select">
                                            <option>5</option>
                                            <option>4</option>
                                            <option>3</option>
                                            <option>2</option>
                                            <option>1</option>
                                        </select>
                                    </div>
                                </label>

                                <label className="item">
                                    <span>정확성</span>
                                    <div className="select-comm">
                                        <select name="select">
                                            <option>5</option>
                                            <option>4</option>
                                            <option>3</option>
                                            <option>2</option>
                                            <option>1</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="reaction-input">
                            <textarea
                                className="textarea-comm"
                                name=""
                                placeholder="콘텐츠 개선 의견을 남겨주세요."
                            ></textarea>
                            <button type="submit" className="btn-primary">
                                참여하기
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </ContentLayout>
    );
};

export default Screen0;

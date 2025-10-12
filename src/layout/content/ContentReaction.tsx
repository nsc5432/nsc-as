import reaction_lv5 from '../../assets/icon/reaction_lv5.svg';
import reaction_lv4 from '../../assets/icon/reaction_lv4.svg';
import reaction_lv3 from '../../assets/icon/reaction_lv3.svg';
import reaction_lv2 from '../../assets/icon/reaction_lv2.svg';
import reaction_lv1 from '../../assets/icon/reaction_lv1.svg';

const ContentReaction = () => {
    const onSubmit = () => {
        alert('참여하기');
    };

    return (
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
                    <button className="btn-primary" onClick={onSubmit}>
                        참여하기
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ContentReaction;

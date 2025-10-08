const Sidebar = () => {
    return (
        <div className="portal-sidebar">
            <div className="sidebar-tab">
                <button type="button" className="sidebar-tab-btn active">
                    Category
                </button>
                <button type="button" className="sidebar-tab-btn">
                    My Report
                </button>
            </div>
            <nav className="sidebar-nav">
                <ul className="sidebar-menu">
                    <li className="sidebar-item active">
                        <button type="button" className="btn">
                            공식통계
                        </button>
                        <ul className="sidebar-submenu">
                            <li className="sidebar-item active">
                                <button type="button" className="btn">
                                    통계
                                </button>
                                <ul className="sidebar-smmenu">
                                    <li className="sidebar-item active">
                                        <a
                                            href="${pageContext.request.contextPath}/airline/static0"
                                            className="btn"
                                        >
                                            {' '}
                                            AS 항공 통계 포털0{' '}
                                        </a>
                                    </li>
                                    <li className="sidebar-item active">
                                        <a
                                            href="${pageContext.request.contextPath}/airline/static"
                                            className="btn"
                                        >
                                            {' '}
                                            AS 항공 통계 포털1{' '}
                                        </a>
                                    </li>
                                    <li className="sidebar-item active">
                                        <a
                                            href="${pageContext.request.contextPath}/airline/static2"
                                            className="btn"
                                        >
                                            {' '}
                                            AS 항공 통계 포털2{' '}
                                        </a>
                                    </li>
                                    <li className="sidebar-item active">
                                        <a
                                            href="${pageContext.request.contextPath}/airline/static3"
                                            className="btn"
                                        >
                                            {' '}
                                            AS 항공 통계 포털3{' '}
                                        </a>
                                    </li>
                                    <li className="sidebar-item active">
                                        <a
                                            href="${pageContext.request.contextPath}/agGrid/agGrid1"
                                            className="btn"
                                        >
                                            {' '}
                                            AS 항공 통계 포털4{' '}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item">
                                <button type="button" className="btn">
                                    여객
                                </button>
                            </li>
                            <li className="sidebar-item">
                                <button type="button" className="btn">
                                    화물
                                </button>
                            </li>
                            <li className="sidebar-item">
                                <button type="button" className="btn">
                                    시설
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-item">
                        <button type="button" className="btn">
                            주제별통계
                        </button>
                    </li>
                    <li className="sidebar-item">
                        <button type="button" className="btn">
                            포털안내
                        </button>
                    </li>
                    <li className="sidebar-item">
                        <button type="button" className="btn">
                            서비스소개
                        </button>
                        <ul className="sidebar-submenu">
                            <li className="sidebar-item active">
                                <button type="button" className="btn">
                                    항공통계포털 소개
                                </button>
                            </li>
                            <li className="sidebar-item">
                                <button type="button" className="btn">
                                    새소식
                                </button>
                            </li>
                            <li className="sidebar-item">
                                <button type="button" className="btn">
                                    서비스 정책
                                </button>
                                <ul className="sidebar-smmenu">
                                    <li className="sidebar-item active">
                                        <a href="#" className="btn">
                                            통계정보 이용지침
                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a href="#" className="btn">
                                            통계정보 활용약관
                                        </a>
                                    </li>
                                    <li className="sidebar-item">
                                        <a href="#" className="btn">
                                            개인정보처리방침
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;

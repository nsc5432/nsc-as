import logo from '../../assets/logo/logo_white.svg';

const Header = () => {
    return (
        <header className="portal-header">
            <h1 className="header-logo">
                <img src={logo} alt="AS 항공통계포털" />
            </h1>
            <nav className="header-nav">
                <ul className="header-menu">
                    <li className="header-item active">
                        <a href="#" className="btn">
                            공식통계
                        </a>
                    </li>
                    <li className="header-item">
                        <a href="#" className="btn">
                            주제별통계
                        </a>
                    </li>
                    <li className="header-item">
                        <a href="#" className="btn">
                            포털안내
                        </a>
                    </li>
                    <li className="header-item">
                        <a href="#" className="btn">
                            서비스소개
                        </a>
                    </li>
                </ul>

                <div className="header-global">
                    <div className="global-search">
                        <input
                            type="text"
                            name=""
                            className="search-textfield"
                            placeholder="메뉴를 검색하세요."
                        />
                    </div>
                    <div className="global-panel">60:00 로그인 연장</div>
                    <div className="global-item">2024-07-24 수요일</div>
                    <div className="global-panel">
                        <span className="user">사용자명</span>
                    </div>
                    <div className="global-item">
                        <button type="button" className="btn-icon">
                            <i className="icon-logout"></i>
                            <span className="blind">로그아웃</span>
                        </button>
                        <button type="button" className="btn-icon">
                            <i className="icon-hamburger"></i>
                            <span className="blind">메뉴보기</span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

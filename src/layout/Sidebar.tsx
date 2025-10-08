import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TabType = 'CATEGORY' | 'MY_REPORT';
type MenuType = string | undefined;
type SidebarType = TabType | MenuType;

const Sidebar = () => {
    const navigate = useNavigate();
    const [tabBtn, setTabBtn] = useState<TabType>('CATEGORY');
    const [menuBtn, setMenuBtn] = useState<MenuType>();

    const onClickTabBtn = setTabBtn;
    const onClickMenuBtn = setMenuBtn;

    const isActive = (subject: SidebarType) => (target: SidebarType) =>
        subject === target ? 'active' : '';
    const isActiveTab = isActive(tabBtn);
    const isActiveMenu = isActive(menuBtn);

    useEffect(() => {
        if (!menuBtn) {
            // TODO: 가장 상단의 메뉴 선택
            setMenuBtn('screen0');
            return;
        }

        navigate(menuBtn);
    }, [menuBtn]);

    return (
        <div className="portal-sidebar">
            <div className="sidebar-tab">
                <button
                    // className={`sidebar-tab-btn ${isActiveTab('CATEGORY')}`}
                    className={`sidebar-tab-btn ${isActive(tabBtn)('CATEGORY')}`}
                    onClick={() => onClickTabBtn('CATEGORY')}
                >
                    Category
                </button>
                <button
                    className={`sidebar-tab-btn ${isActiveTab('MY_REPORT')}`}
                    onClick={() => onClickTabBtn('MY_REPORT')}
                >
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
                                    <li className={`sidebar-item ${isActiveMenu('screen0')}`}>
                                        <button
                                            className="btn"
                                            onClick={() => onClickMenuBtn('screen0')}
                                        >
                                            AS 항공 통계 포털0
                                        </button>
                                    </li>
                                    <li className={`sidebar-item ${isActiveMenu('screen1')}`}>
                                        <button
                                            className="btn"
                                            onClick={() => onClickMenuBtn('screen1')}
                                        >
                                            AS 항공 통계 포털1
                                        </button>
                                    </li>
                                    <li className={`sidebar-item ${isActiveMenu('screen2')}`}>
                                        <button
                                            className="btn"
                                            onClick={() => onClickMenuBtn('screen2')}
                                        >
                                            AS 항공 통계 포털2
                                        </button>
                                    </li>
                                    <li className={`sidebar-item ${isActiveMenu('screen3')}`}>
                                        <button
                                            className="btn"
                                            onClick={() => onClickMenuBtn('screen3')}
                                        >
                                            AS 항공 통계 포털3
                                        </button>
                                    </li>
                                    <li className={`sidebar-item ${isActiveMenu('screen4')}`}>
                                        <button
                                            className="btn"
                                            onClick={() => onClickMenuBtn('screen4')}
                                        >
                                            AS 항공 통계 포털4
                                        </button>
                                    </li>
                                    <li className={`sidebar-item ${isActiveMenu('screen5')}`}>
                                        <button
                                            className="btn"
                                            onClick={() => onClickMenuBtn('screen5')}
                                        >
                                            Cache Sample{' '}
                                        </button>
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

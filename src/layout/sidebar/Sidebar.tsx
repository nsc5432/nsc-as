import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { eq, updateInList } from '../../common/fp-utils';
import type { MenuType } from './MenuList';
import MenuList from './MenuList';

type SelectedTab = 'CATEGORY' | 'MY_REPORT';
type SelectedMenu = MenuType;

const Sidebar = () => {
    const navigate = useNavigate();
    const [menuListState, setMenuListState] = useState<MenuType[]>([]);
    const [selectedTab, setSelectedTab] = useState<SelectedTab>('CATEGORY');
    const [selectedMenu, setSelectedMenu] = useState<SelectedMenu>();

    const onClickTabBtn = setSelectedTab;
    const onClickMenu = (menu: MenuType) => {
        if (menu.isLeaf && menu.moveUri) {
            setSelectedMenu(menu);
        }

        const spreadToggled = updateInList(menuListState)('menuId', menu.menuId)((target) => ({
            isSpread: !target.isSpread,
        }));

        setMenuListState(spreadToggled);
    };

    const isActive = (a: string | undefined) => (b: string) => (eq(a)(b) ? 'active' : '');
    const isActiveTab = isActive(selectedTab);

    useEffect(() => {
        (async () => {
            // TODO: DB load
            const menuListFromDB = await menuList();
            setMenuListState(menuListFromDB.map((m) => ({ ...m, isSpread: true })));
            setSelectedMenu(menuListFromDB.filter((m) => m.isLeaf && m.moveUri)[0]);
        })();
    }, []);

    useEffect(() => {
        if (!selectedMenu) {
            return;
        }

        navigate(selectedMenu.moveUri as string);
    }, [selectedMenu]);

    return (
        <>
            <div className="portal-sidebar">
                <div className="sidebar-tab">
                    <button
                        className={`sidebar-tab-btn ${isActiveTab('CATEGORY')}`}
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
                        <MenuList
                            menuList={menuListState}
                            onClick={onClickMenu}
                            selectedMenu={selectedMenu}
                        />
                    </ul>
                </nav>
            </div>
            <div className="portal-dragable">
                <button type="button" className="dragable-btn">
                    <span className="blind">Fold</span>
                </button>
            </div>
        </>
    );
};

export default Sidebar;

// TODO: DB load
const menuList: () => Promise<MenuType[]> = () =>
    new Promise((res) =>
        res([
            {
                menuId: 'AS10000',
                pMenuId: null,
                menuName: '공식통계',
                isLeaf: false,
                depth: 0,
            },
            {
                menuId: 'AS10100',
                pMenuId: 'AS10000',
                menuName: '통계',
                isLeaf: false,
                depth: 1,
            },
            {
                menuId: 'AS10101',
                pMenuId: 'AS10100',
                menuName: '정기/부정기 운항 현황',
                isLeaf: true,
                depth: 2,
                moveUri: 'screen0',
            },
            {
                menuId: 'AS10102',
                pMenuId: 'AS10100',
                menuName: 'AS 항공 통계 포털1',
                isLeaf: true,
                depth: 2,
                moveUri: 'screen1',
            },
            {
                menuId: 'AS10103',
                pMenuId: 'AS10100',
                menuName: 'AS 항공 통계 포털2',
                isLeaf: true,
                depth: 2,
                moveUri: 'screen2',
            },
            {
                menuId: 'AS10104',
                pMenuId: 'AS10100',
                menuName: 'AS 항공 통계 포털3',
                isLeaf: true,
                depth: 2,
                moveUri: 'screen3',
            },
            {
                menuId: 'AS10105',
                pMenuId: 'AS10100',
                menuName: 'AS 항공 통계 포털4',
                isLeaf: true,
                depth: 2,
                moveUri: 'screen4',
            },
            {
                menuId: 'AS10106',
                pMenuId: 'AS10100',
                menuName: 'Cache Sample',
                isLeaf: true,
                depth: 2,
                moveUri: 'screen5',
            },
            {
                menuId: 'AS10200',
                pMenuId: 'AS10000',
                menuName: '여객',
                isLeaf: false,
                depth: 1,
            },
            {
                menuId: 'AS10300',
                pMenuId: 'AS10000',
                menuName: '화물',
                isLeaf: false,
                depth: 1,
            },
            {
                menuId: 'AS10400',
                pMenuId: 'AS10000',
                menuName: '시설',
                isLeaf: false,
                depth: 1,
            },
            {
                menuId: 'AS20000',
                pMenuId: null,
                menuName: '주제별통계',
                isLeaf: false,
                depth: 0,
            },
            {
                menuId: 'AS30000',
                pMenuId: null,
                menuName: '포털안내',
                isLeaf: false,
                depth: 0,
            },
            {
                menuId: 'AS40000',
                pMenuId: null,
                menuName: '서비스소개',
                isLeaf: false,
                depth: 0,
            },
            {
                menuId: 'AS40100',
                pMenuId: 'AS40000',
                menuName: '항공통계포털 소개',
                isLeaf: false,
                depth: 1,
            },
            {
                menuId: 'AS40200',
                pMenuId: 'AS40000',
                menuName: '새소식',
                isLeaf: false,
                depth: 1,
            },
            {
                menuId: 'AS40300',
                pMenuId: 'AS40000',
                menuName: '서비스 정책',
                isLeaf: false,
                depth: 1,
            },
            {
                menuId: 'AS40301',
                pMenuId: 'AS40300',
                menuName: '통계정보 이용지침',
                isLeaf: true,
                depth: 2,
            },
            {
                menuId: 'AS40302',
                pMenuId: 'AS40300',
                menuName: '통계정보 활용약관',
                isLeaf: true,
                depth: 2,
            },
            {
                menuId: 'AS40303',
                pMenuId: 'AS40300',
                menuName: '개인정보처리방침',
                isLeaf: true,
                depth: 2,
            },
        ])
    );

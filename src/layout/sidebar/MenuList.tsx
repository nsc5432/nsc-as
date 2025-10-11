import { useEffect, useState, type JSX, type ReactNode } from 'react';

interface MenuListProps {
    menuList: MenuType[];
    selectedMenu: MenuType | undefined;
    onClick: (target: MenuType) => void;
}

export type MenuType = {
    menuId: string;
    pMenuId: string | null;
    menuName: string;
    isLeaf: boolean;
    depth: number;
    moveUri?: string;
    isSpread?: boolean;
};

interface SidebarItemProps {
    menu: MenuType;
    selectedMenu: MenuType;
    children?: ReactNode;
}

const MenuList = ({ menuList, selectedMenu, onClick }: MenuListProps) => {
    const [menuListRender, setMenuListRender] = useState<JSX.Element[]>([]);

    useEffect(() => {
        if (!selectedMenu) {
            return;
        }

        const depth0 = () =>
            menuList
                .filter((m0) => m0.depth === 0)
                .map((m0) => (
                    <SidebarItem key={m0.menuId} menu={m0} selectedMenu={selectedMenu}>
                        <ul className="sidebar-submenu">{depth1(m0)}</ul>
                    </SidebarItem>
                ));

        const depth1 = (m0: MenuType) =>
            menuList
                .filter((m1) => m1.depth === 1 && m1.pMenuId === m0.menuId)
                .map((m1) => (
                    <SidebarItem key={m1.menuId} menu={m1} selectedMenu={selectedMenu}>
                        <ul className="sidebar-smmenu">{depth2(m1)}</ul>
                    </SidebarItem>
                ));

        const depth2 = (m1: MenuType) =>
            menuList
                .filter((m2) => m2.depth === 2 && m2.pMenuId === m1.menuId)
                .map((m2) => <SidebarItem key={m2.menuId} menu={m2} selectedMenu={selectedMenu} />);

        setMenuListRender(depth0());
    }, [menuList, selectedMenu]);

    const SidebarItem = ({ menu, children, selectedMenu }: SidebarItemProps) => {
        const isActive = (menu: MenuType, targetMenu: MenuType) => {
            if (isSpread(menu) || menu.menuId === targetMenu.menuId) {
                return 'active';
            }
        };

        const isSpread = (menu: MenuType) => !menu.isLeaf && menu.isSpread;

        return (
            <li className={`sidebar-item ${isActive(menu, selectedMenu)}`}>
                <button type="button" className="btn" onClick={() => onClick(menu)}>
                    {menu.menuName}
                </button>
                {children}
            </li>
        );
    };

    return <>{menuListRender}</>;
};

export default MenuList;

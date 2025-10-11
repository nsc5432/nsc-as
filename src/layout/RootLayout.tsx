import { Outlet } from 'react-router-dom';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

import '../css/index.css';
import '../css/fonts/pretendard/pretendardvariable.css';
import '../css/fonts/gmarket/gmarket.css';
import '../css/layout/RootLayout.css';
import '../css/layout/Header.css';
import '../css/layout/Sidebar.css';
import '../css/layout/Content.css';

export default function RootLayout() {
    return (
        <div className="root">
            <Header />
            <div className="portal-container">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
}

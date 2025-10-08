import { Outlet } from 'react-router-dom';

import Header from './Header';

import '../css/index.css';
import '../css/fonts/pretendard/pretendardvariable.css';
import '../css/fonts/gmarket/gmarket.css';
import '../css/layout/RootLayout.css';
import '../css/layout/Header.css';

export default function RootLayout() {
    return (
        <div className="root">
            <Header />
            <Outlet />
        </div>
    );
}

import { Link, Outlet } from 'react-router-dom';

export default function RootLayout() {
    return (
        <>
            <nav style={{ display: 'flex', gap: 12, padding: 8 }}>
                <Link to="/">Home</Link>
                <Link to="/screen1">Screen1</Link>
                <Link to="/cache-sample">CacheSample</Link>
            </nav>

            <Outlet />
        </>
    );
}

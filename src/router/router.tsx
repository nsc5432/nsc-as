import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '../layout/RootLayout';
import Loading from '../common/comp/Loading';

const Screen0 = lazy(() => import('../demo/screen0/Screen0'));
const Screen1 = lazy(() => import('../demo/screen1/Screen1'));
const Screen2 = lazy(() => import('../demo/screen2/Screen2'));
const Screen3 = lazy(() => import('../demo/screen3/Screen3'));
const Screen4 = lazy(() => import('../demo/screen4/Screen4'));
const Screen5 = lazy(() => import('../demo/screen5/CacheSample'));

const screens = [Screen0, Screen1, Screen2, Screen3, Screen4, Screen5];

const router = createBrowserRouter(
    [
        {
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: (
                        <Suspense fallback={<Loading />}>
                            <Screen0 />
                        </Suspense>
                    ),
                },
                ...screens.map((Comp, i) => ({
                    path: 'screen' + i,
                    element: (
                        <Suspense fallback={<Loading />}>
                            <Comp />
                        </Suspense>
                    ),
                })),
            ],
        },
    ],
    {
        basename: import.meta.env.BASE_URL,
    }
);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}

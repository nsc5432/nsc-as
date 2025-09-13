import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '../layout/RootLayout';

const Screen1 = lazy(() => import('../demo/screen1/Screen1'));
const CacheSample = lazy(() => import('../sample/CacheSample'));

export const router = createBrowserRouter(
    [
        {
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <div>홈 입니다</div>,
                },
                {
                    path: 'screen1',
                    element: (
                        <Suspense fallback={<div>Loading</div>}>
                            <Screen1 />
                        </Suspense>
                    ),
                },
                {
                    path: 'cache-sample',
                    element: (
                        <Suspense fallback={<div>Loading</div>}>
                            <CacheSample />
                        </Suspense>
                    ),
                },
            ],
        },
    ],
    {
        // 서브 경로 배포 시 자동 처리 (vite base와 연동)
        basename: import.meta.env.BASE_URL,
    }
);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}

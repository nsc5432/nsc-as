import type { ReactNode } from 'react';

interface ContentLayoutProps {
    children: ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
    return <div className="portal-content">{children}</div>;
};

export default ContentLayout;

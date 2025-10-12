import type { ReactNode } from 'react';

interface ContentMainProps {
    children: ReactNode;
}
const ContentMain = ({ children }: ContentMainProps) => {
    return <div className="content-main">{children}</div>;
};

export default ContentMain;

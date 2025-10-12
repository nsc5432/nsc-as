import type { ReactNode } from 'react';

interface ContentFilterProps {
    onSearch: () => void;
    onReset: () => void;
    children: ReactNode;
}
const ContentFilter = ({ onSearch, onReset, children }: ContentFilterProps) => {
    return (
        <div className="content-filter">
            {children}
            <div className="filter-btns">
                <button type="submit" className="btn-primary" onClick={() => onSearch()}>
                    <i className="icon-search"></i>
                    <span>SEARCH</span>
                </button>
                <button type="submit" className="btn-primary" onClick={() => onReset()}>
                    <i className="icon-refresh"></i>
                    <span>초기화</span>
                </button>
            </div>
        </div>
    );
};

export default ContentFilter;

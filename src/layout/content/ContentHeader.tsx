interface ContentHeaderProps {
    title: string;
    path: string[];
}
const ContentHeader = ({ title, path }: ContentHeaderProps) => {
    return (
        <>
            <div className="content-header">
                <h2 className="content-title">{title}</h2>
            </div>
            <div className="content-top">
                <div className="content-breadcrumbs">
                    {path.map((p) => (
                        <span key={p}>{p}</span>
                    ))}
                    <span>{title}</span>
                </div>
                <div className="content-utils">
                    <button type="button" className="btn-icon">
                        <i className="icon-print"></i>
                    </button>
                    <button type="button" className="btn-icon">
                        <i className="icon-bookmark"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ContentHeader;

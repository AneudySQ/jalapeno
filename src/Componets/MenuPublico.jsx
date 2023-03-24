export default function MenuPublico({ docId, title, }) {
    return (
        <div key={docId}>
            <div className="menu-item-section clearfix ">
                <h2>
                    {title}
                </h2>
            </div>
        </div>
    )

}
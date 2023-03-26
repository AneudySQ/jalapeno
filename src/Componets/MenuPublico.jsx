export default function MenuPublico({ docId, title, order, description }) {
    return (
        <div key={docId}>
            <div className="menu-item-section clearfix ">
                <h2>{title}</h2>
                <h2> {order}</h2>
                <h2>{description}</h2>
            </div>
        </div>
    )

}


export default function Link({ docId, title, url, onDelete, onUpdata }) {
    <div key={docId}>
        <a href={url}>{title} </a>
    </div>
}
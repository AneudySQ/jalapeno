export default function Category({docId, name, order, OnDelete, onUpdata}) {
    return(
        <div key={docId}>
            {name}
        </div>
    );
}
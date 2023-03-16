export default function Category({ docId, name, order, description, OnDelete, onUpdata }) {
    return (
        <div className="card bg-black container " key={docId}>
            <div className="row">
                
            </div>
            {order}
            {name}
            {description}

            <div className="col-lg-6 m-1 " >
                <div className="box_style_2" id="main_menu">
                    <h2 className="inner">Menu</h2>
                    <h3 className="nomargin_top" id="starters">Starters</h3>
                    <p>
                        Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea.
                    </p>

                </div>
            </div>

        </div>





    );
}
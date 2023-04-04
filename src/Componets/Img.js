import { uploadFiles } from "../Firebase/Firebase"
import { useState } from "react"




export default function Img() {

    const [file, setfile] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const result = await uploadFiles(file);
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    }


return (

    <div className="row">
        <form className="col-md-3" onSubmit={handleSubmit}>
            <input
                name="file"
                type="file"
                onChange={(e) => setfile(e.target.files[0])} 
                src={file}
                />
            <button
                className="dz-default dz-message"><span>Click or Drop<br />Images Here</span>
            </button>
        </form>

    </div>
)
}


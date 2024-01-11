import { useState } from "react"

export const BoxCard = ({ result, children }) =>{
    const [show, setShow] = useState(true);
    return(
        <div className={ show? "": "hidden"}> {/*to hide the bos card if show == false , using css"hidden" property to hide the box   */}
        <div className={`box ${result}`}>
            {children}
            <button className="trigger" onClick={() => setShow(!show)}>hide</button>
        </div>
        </div>
    )
}
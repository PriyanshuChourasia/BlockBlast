import { useState } from "react";
import { ShapeSelect } from "./shapeSelect";



const ShapeSelectProvider = ({children}) =>{

    const [shapeType,setShapeType] = useState(null);

    return(
        <ShapeSelect.Provider value={{
            shapeType,setShapeType
        }}>
            {children}
        </ShapeSelect.Provider>
    )
}


export default ShapeSelectProvider;
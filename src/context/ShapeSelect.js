import { createContext } from "react"



const defaultValue = {
    shapeType:null,
    setShapeType:() => {}
}

export const ShapeSelect = createContext(defaultValue);
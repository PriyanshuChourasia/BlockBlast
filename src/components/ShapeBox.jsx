


const ShapeBox = ({i,j,color}) =>{
    return(
        <div i={i} j={j} className={`${color ? `${color} border-[1px] border-white` : ""} w-10 h-10`}>
        </div>
    )
}

export default ShapeBox;
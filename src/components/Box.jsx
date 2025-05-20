


const Box = ({i,j,color,onClick}) =>{
    return(
        <div onClick={onClick} i={i} j={j} className={`w-14 h-14 text-white  cursor-pointer border-[1px] border-white ${color ? color : "bg-slate-800 hover:bg-slate-600"} `}>
            {i}{j}
        </div>
    )
}


export default Box;
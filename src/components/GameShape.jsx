import { useContext, useEffect, useState } from "react";
import ShapeBox from "./ShapeBox";
import { ShapeSelect } from "../context/shapeSelect";


/**
 * const gameShapeObj = {
 *  i:0,
 *  j:0,
 *  color:"bg-red-500",
 *  fill:true/null,
 *  pattern:null
 * }
 */

const GameShape = () =>{

    const [mainShapes,setMainShapes] = useState([]);
    const {setShapeType} = useContext(ShapeSelect);
    

    useEffect(()=>{
        let funRun = 0;
        let mainShapeArray = [];
        function getRandomShapes(n){
            
            n = n -1;
            let currentArray = [];
            
            for(let i=0; i<2; i++){
                for(let j=0; j<3; j++){
                    const shapeObj = {
                        i:i,
                        j:j,
                        color:null,
                        fill:null,
                        pattern:null
                    };
                    if(funRun == 0){
                        if(i == 0 && j == 1){
                            shapeObj.i = i;
                            shapeObj.i = j;
                            shapeObj.color = "bg-red-500";
                            shapeObj.fill = true;
                            shapeObj.pattern = "lowerT";
                        }else if(i == 1){
                            shapeObj.i = i;
                            shapeObj.i = j;
                            shapeObj.color = "bg-red-500";
                            shapeObj.fill = true;
                            shapeObj.pattern = "lowerT";
                        }else{
                            shapeObj.i = i;
                            shapeObj.i = j;
                            shapeObj.color = null;
                            shapeObj.fill = null;
                            shapeObj.pattern = "lowerT";
                        }
                    }else if(funRun == 1){
                        shapeObj.i = i;
                        shapeObj.i = j;
                        shapeObj.color = "bg-green-500";
                        shapeObj.fill = true;
                        shapeObj.pattern = "rectangle";
                        
                    }else if(funRun == 2){
                        if(i == 1 && j == 1){
                            shapeObj.i = i;
                            shapeObj.i = j;
                            shapeObj.color = "bg-blue-500";
                            shapeObj.fill = true;
                            shapeObj.pattern = "upperT";
                        }else if(i == 0){
                            shapeObj.i = i;
                            shapeObj.i = j;
                            shapeObj.color = "bg-blue-500";
                            shapeObj.fill = true;
                            shapeObj.pattern = "upperT";
                        }else{
                            shapeObj.i = i;
                            shapeObj.i = j;
                            shapeObj.color = null;
                            shapeObj.fill = null;
                            shapeObj.pattern = "upperT";
                        }
                    }
                    currentArray.push(shapeObj);
                }
            }
            mainShapeArray.push([currentArray]);
            setMainShapes(mainShapeArray);
            funRun = funRun  + 1;
            if(n!== 0){
                getRandomShapes(n);
            }
        }
        getRandomShapes(3);
    },[]);
   

    function onHandleClickPattern(box){
        setShapeType(box);
    }

    return(
        <div className="flex flex-wrap gap-4 my-8 cursor-pointer">
            {
               mainShapes.flat().map((item,index)=>(
                    <div onClick={()=>onHandleClickPattern(item)} key={index} className="flex flex-wrap w-[120px]">
                        {
                            item.map((box,index) =>(
                                <ShapeBox key={index} i={box.i} j={box.j} color={box.color} />
                            ))
                        }
                    </div>
               )) 
            }
        </div>
    )
}


export default GameShape;
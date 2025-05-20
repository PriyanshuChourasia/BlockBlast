/***
 * const blastBox = {
 *  i:0,
 *  j:0,
 * color:"",
 *  piece: true / null
 * }
 */

import { useContext, useEffect, useState } from "react";
import Box from "./Box";
import { ShapeSelect } from "../context/shapeSelect";


const Board = () =>{

    const [gameBoard,setGameBoard] = useState([]);
    const {shapeType} = useContext(ShapeSelect);

    useEffect(()=>{
        let blastBoxArray = [];
        for(let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                const blastBox = {
                    i:i,
                    j:j,
                    color:null,
                    piece:null
                }
                blastBoxArray.push(blastBox);
            }
        }
        setGameBoard(blastBoxArray);
    },[]);

    function onHandleClickBox(item){
        if(shapeType[0].pattern == "lowerT"){
            lowerTCheck(item,shapeType[1]);
            return;
        }else if(shapeType[0].pattern == "rectangle"){
            rectangle(item,shapeType[1]);
            return;
        }
    };


    function lowerTCheck(item,shape){
        const shapeColor = shape.color;
        let posI = item.i;
        let posJ = item.j;
        let downI = item.i + 1;
        let downJ = item.j;
        let leftDownI = item.i + 1;
        let leftDownJ = item.j;
        let rightDownI = item.i + 1;
        let rightDownJ = item.j;

        leftDownJ = leftDownJ - 1;
        rightDownJ = rightDownJ + 1;

        
        const posGameBoard = gameBoard.some((x) =>x.piece == null && Number(x.i) == posI && Number(x.j) == posJ);
        const leftDownGameBoard = gameBoard.some((x) => Number(x.i) == leftDownI && Number(x.j) == leftDownJ && x.piece == null);
        const rightDownGameBoard = gameBoard.some((x) => Number(x.i) == rightDownI && Number(x.j) == rightDownJ && x.piece == null);
        const downGameBoard = gameBoard.some((x) => Number(x.i) == downI && Number(x.j) == downJ && x.piece == null);
        if(posGameBoard && leftDownGameBoard && rightDownGameBoard && downGameBoard){
            const posGameBoard = gameBoard.map((x) => Number(x.i) == posI && Number(x.j) == posJ  ? {...x,piece:true,color:shapeColor} : x);
            const leftDownGameBoard = posGameBoard.map((x) => Number(x.i) == leftDownI && Number(x.j) == leftDownJ  ? {...x,piece:true,color:shapeColor} : x);
            const rightDownGameBoard = leftDownGameBoard.map((x) => Number(x.i) == rightDownI && Number(x.j) == rightDownJ ? {...x,piece:true,color:shapeColor} : x);
            const downGameBoard = rightDownGameBoard.map((x) => Number(x.i) == downI && Number(x.j) == downJ ? {...x,piece:true,color:shapeColor} : x);
            setGameBoard(downGameBoard);
        }else{
            return;
        }
    }

    function rectangle(item,shape){
        const checkItemNull = gameBoard.some((x) => Number(x.i) == item.i && Number(x.j) == item.j && x.piece == null);
        if(!checkItemNull){
            return;
        }

        const shapeColor = shape.color;
        let posI = item.i;
        let posJ = item.j;
        let leftI = item.i;
        let leftJ = item.j
        let rightI = item.i;
        let rightJ = item.j;
        let leftDownI = item.i;
        let leftDownJ = item.j;
        let downI = item.i;
        let downJ = item.j;
        let rightDownI = item.i;
        let rightDownJ = item.j;
        
        // left null check
        leftJ = leftJ - 1;

        const leftNullCheck = gameBoard.some((x) => Number(x.i) == leftI && Number(x.j) == leftJ && x.piece == null);
        // right null check
        rightJ = rightJ + 1;
        const rightNUllCheck = gameBoard.some((x) => Number(x.i) == rightI && Number(x.j) == rightJ && x.piece == null);

        // left down null
        leftDownI = leftDownI + 1;
        leftDownJ = leftDownJ - 1;
        const leftDownNullCheck = gameBoard.some((x) => Number(x.i) == leftDownI && Number(x.j) == leftDownJ && x.piece == null);

        // down null check
        downI = downI + 1;
        const downNullCheck = gameBoard.some((x) => Number(x.i) == downI && Number(x.j) == downJ && x.piece == null);

        // right down null check
        rightDownI = rightDownI + 1;
        rightDownJ = rightDownJ + 1;
        const rightDownNullCheck = gameBoard.some((x) => Number(x.i) == rightDownI && Number(x.j) == rightDownJ && x.piece == null);

        if(leftNullCheck && rightNUllCheck && leftDownNullCheck && downNullCheck && rightDownNullCheck)
        {
            const rectangleMap = gameBoard.map((x) => {
                if(Number(x.i) == leftI && Number(x.j) == leftJ){
                    x.piece = true;
                    x.color = shapeColor
                }
                else if(Number(x.i) == rightI && Number(x.j) == rightJ){
                    x.piece = true;
                    x.color = shapeColor;
                }
                else if(Number(x.i) == posI && Number(x.j) == posJ){
                    x.piece = true;
                    x.color = shapeColor;
                }
                else if(Number(x.i) == leftDownI && Number(x.j) == leftDownJ){
                    x.piece = true;
                    x.color = shapeColor;
                }
                else if(Number(x.i) == downI && Number(x.j) == downJ){
                    x.piece = true;
                    x.color = shapeColor;
                }
                else if(Number(x.i) == rightDownI && Number(x.j) == rightDownJ){
                    x.piece = true;
                    x.color = shapeColor;
                }
                return x;
            });
            setGameBoard(rectangleMap);
        }
    }

    return(
        <div className="flex flex-wrap w-[450px] rounded">
            {
                gameBoard.map((item,index)=>(
                    <Box key={index} i={item.i} j={item.j} color={item.color} onClick={()=>onHandleClickBox(item)} />
                ))
            }
        </div>
    )
}

export default Board;
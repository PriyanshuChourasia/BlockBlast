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
        }
    };


    function lowerTCheck(item,shape){
        const shapeColor = shape.color;
        console.log(item,"item")
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

        console.log(leftDownI,leftDownJ,posI,posJ,downI,downJ,rightDownI,rightDownJ,"right");
        
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
import Board from "./components/Board";
import GameShape from "./components/GameShape";
import ShapeSelectProvider from "./context/ShapeSelectProvider";

const App = () =>{
  return(
    <ShapeSelectProvider>
      <div className="w-full h-full flex flex-col justify-center items-center py-10"> 
        <Board/>
        <GameShape/>
        <p>shape</p>
      </div>
    </ShapeSelectProvider>
  )
}

export default App;
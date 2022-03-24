import react from "react";
import { useCountContext } from "../../context/CountContextProvider";
import TopView from "../../components/TopView";
import BottomView from "../../components/BottomView"
export default function MainScreen(){
    const countContext=useCountContext();
    console.log(countContext);
    return(
        <>
            {/*console.log()*/}
            <TopView />
            <BottomView />
        </>
    )
}
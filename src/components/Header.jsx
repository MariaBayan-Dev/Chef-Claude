import { PiChefHat } from "react-icons/pi"

export default function Header(){
    return(
        <header>
            <PiChefHat className="chef-icon"/>
            <h1>Chef Claude</h1>
        </header>
    )
}
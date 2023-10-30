import {CartWidget} from "./CartWidget";
export const NavBar = ()=>{
    return <header>
        <nav>
            <div>Eccomerce</div>
            <ul>
                <li><a href="#">PlayStation</a></li>
                <li><a href="#">Xbox</a></li>
                <li><a href="#">Retro Gamer</a></li>
            </ul>
            <CartWidget />
        </nav>
    </header>  
}
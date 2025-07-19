import Link from "next/link";
import NavItems from "./navbaritems";

const Navbar =() =>{
    return(
        <nav className = "navbar">
            <Link href= "/">
            <div className = "flex item-center gap-2.5 cursor-pointer">
                <img src = "/images/logo.svg" alt = "logo" width = {47} height ={44}/>
            </div>
            </Link>
            <div className = "flex items-center gap-8">
                <NavItems/>
                <p>Sign-in</p>
            </div>
        </nav>
    )
}

export default Navbar;
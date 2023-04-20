import { Link, } from "react-router-dom";
import { Button } from "../Button/Button";


const Header = () => {
    return (
        <header className="shadow py-4 bg-white sticky top-0 w-full z-20">
            <div className="md:container px-3">
                <div className="flex justify-between items-center">

                    <div className="flex items-center gap-2">
                        <Link to="/" className="font-medium cap text-lg">English Now</Link>
                    </div>

                    <ul>
                        <li>
                            <Link to="/vocabulary">Vocabulary</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;


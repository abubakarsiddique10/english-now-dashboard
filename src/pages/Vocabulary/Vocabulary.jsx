import { Outlet, Link } from "react-router-dom";

const Vocabulary = () => {
    return (
        <div>
            <div className="mt-8 flex gap-5">
                <Link to="/vocabulary">AddVocabulary</Link>
                <Link to="/vocabulary/UpdateVocabulary">UpdateVocabulary</Link>
            </div>
            <Outlet />
        </div>
    )
}
export default Vocabulary;
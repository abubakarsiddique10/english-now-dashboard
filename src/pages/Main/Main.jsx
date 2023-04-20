import { Route, Routes } from "react-router-dom"
import AddVocabulary from "../Vocabulary/AddVocabulary"
import Vocabulary from "../Vocabulary/Vocabulary"
import Home from "../Home/Home"
import UpdateVocabulary from "../Vocabulary/UpdateVocabulary"

const Main = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vocabulary" element={<Vocabulary />}>
                    <Route index element={<AddVocabulary />} />
                    <Route path="UpdateVocabulary" element={<UpdateVocabulary />} />
                </Route>
            </Routes>
        </div>
    )
}
export default Main
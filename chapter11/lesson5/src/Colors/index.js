import { Routes, Route } from "react-router-dom";
import { ColorDetails } from "./ColorDetails";
import ColorProvider from "./ColorProvider";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";

export default function App() {
    return (
        <ColorProvider>
            <AddColorForm />
            <Routes>
                <Route path="/" element={<ColorList />} />
                <Route path=":id" element={<ColorDetails />} />
            </Routes>
        </ColorProvider>
    );
}
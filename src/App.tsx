import { styled } from "../stitches.config.ts";
import "./App.css";
import ExperienceColumn from "./components/ExperienceColumn.tsx";
import InfoColumn from "./components/InfoColumn.tsx";
import LanguageSelector from "./components/LanguageSelector.tsx";

export default function App() {
    return (
        <>
            <Page>
                <InfoColumn />
                <ExperienceColumn />
            </Page>
            <LanguageSelector />
        </>
    );
}


const Page = styled("div", {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    backgroundColor: "$background",
    minHeight: "100vh",
    maxWidth:"1414px",
    margin: "0 auto",

    "@bp2": {
        flexDirection: "row",
    },
});
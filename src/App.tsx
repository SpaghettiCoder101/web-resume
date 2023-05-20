import { styled } from "../stitches.config.ts";
import "./App.css";
import ExperienceColumn from "./components/ExperienceColumn.tsx";
import InfoColumn from "./components/InfoColumn.tsx";

export default function App() {
    return (
        <Page>
            <InfoColumn />
            <ExperienceColumn />
        </Page>
    );
}


const Page = styled("div", {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    backgroundColor: "$background",
    maxWidth:"1414px",
    maxHeight: "2000px",
    margin: "0 auto",

    "@bp2": {
        flexDirection: "row",
    },
});
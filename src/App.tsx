import { styled } from "../stitches.config.ts";
import "./App.css";

export default function App() {

    return (
        <Page>
            <p>Test</p>
        </Page>
    );
}


const Page = styled("div", {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    backgroundColor: "$background",
    maxWidth:"1414px",
    maxHeight: "2000px",
    margin: "0 auto",
});
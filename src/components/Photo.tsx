import { styled } from "../../stitches.config";

export default function Photo() {
    return (
        <Wrapper />
    );
}

const Wrapper = styled("div", {
    height:"10rem",
    width: "10rem",
    backgroundColor: "$accent",
    borderRadius: "50%",
    "@bp2": {
        height: "17vw",
        width: "17vw",
        maxWidth: "18rem",
        maxHeight: "18rem",
        margin: "0 auto",
        marginBottom: "3rem",
    },
});
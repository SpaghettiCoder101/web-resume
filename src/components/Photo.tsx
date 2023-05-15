import { styled } from "../../stitches.config";

export default function Photo() {
    return (
        <Wrapper />
    );
}

const Wrapper = styled("div", {
    width: "17vw",
    height: "17vw",
    maxWidth: "24rem",
    maxHeight: "24rem",
    backgroundColor: "$accent",
    borderRadius: "50%",
    margin: "0 auto",
    marginBottom: "6rem",
});
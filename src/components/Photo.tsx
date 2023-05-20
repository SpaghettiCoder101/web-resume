import { styled } from "../../stitches.config";
import picture from "../assets/picture.jpg";

export default function Photo() {
    return (
        <Wrapper >
            <Image src={picture} alt="Mirko Masi Photo" />
        </Wrapper>
    );
}

const Wrapper = styled("div", {
    height:"10rem",
    width: "10rem",
    backgroundColor: "$accent",
    borderRadius: "50%",
    overflow: "hidden",
    "@bp2": {
        height: "17vw",
        width: "17vw",
        maxWidth: "18rem",
        maxHeight: "18rem",
        margin: "0 auto",
        marginBottom: "3rem",
    },
});

const Image = styled("img", {
    height: "100%",
    width: "100%",
    objectFit: "cover",
});
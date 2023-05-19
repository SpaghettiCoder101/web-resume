import { useState } from "react";
import { styled } from "../../stitches.config";
import Photo from "./Photo";
import InfoDetails from "./InfoDetails";

export default function InfoColumn() {
    const [open, setOpen] = useState(false);

    return (
        <Wrapper>
            <NameRow>
                <Photo />
                <Name>Mirko Masi</Name>
            </NameRow>
            <Button open={open} onClick={() => setOpen(!open)}>More info</Button>
            <InfoDetails open={open} />
        </Wrapper>
    );
}

const Wrapper = styled("div", {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "$dark",
    width:"100%",
    maxWidth: "100%",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    overflow: "hidden",
    boxSizing: "border-box",
    "@bp1": {
        flexGrow: 1,
        width: "33.3%",
        maxWidth: "33.3%",
        paddingTop: "8rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
    },
    "@bp2": {
        paddingTop: "10rem",
        paddingLeft: "8rem",
        paddingRight: "8rem",
    },
});

const NameRow = styled("div", {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    "@bp1": {
        flexDirection: "column",
        alignItems: "center",
    },
});

const Name = styled("h1", {
    color: "$accent",
    fontSize: "2rem",
    textTransform: "uppercase",
    textAlign: "center",
    
    "@bp2": {
        marginBottom: "5rem",
    },
});

const Button = styled("button", {
    width: "fit-content",
    margin: "auto",
    backgroundColor: "$dark",
    color: "$background",
    fontWeight: "bold",
    fontSize: "1.2rem",
    borderWidth: ".15rem",
    borderColor: "$background",
    borderRadius: "1rem",
    padding: ".5rem 1,5rem",
    variants: {
        open: {
            true: {
                backgroundColor: "$background",
                color: "$dark", 
            },
        },
    },
    "@bp1": {
        display: "none",
    },
});
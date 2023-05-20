import { useState } from "react";
import { styled } from "../../stitches.config";
import Photo from "./Photo";
import InfoDetails from "./InfoDetails";
import { useStrings } from "../localization/hooks/useStrings";

export default function InfoColumn() {
    const strings = useStrings();
    const [open, setOpen] = useState(false);

    return (
        <Wrapper>
            <NameRow>
                <Photo />
                <Name>Mirko Masi</Name>
            </NameRow>
            <Button open={open} onClick={() => setOpen(!open)}>{open ? strings.common$lessInfo : strings.common$moreInfo}</Button>
            <InfoDetails open={open} />
        </Wrapper>
    );
}

const Wrapper = styled("div", {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "$dark",
    maxWidth: "100%",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    overflow: "hidden",
    boxSizing: "border-box",
    "@bp2": {
        flexGrow: 1,
        maxWidth: "33.3%",
        paddingTop: "5rem",
        overflow: "auto",
    },
});

const NameRow = styled("div", {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    "@bp2": {
        flexDirection: "column",
        alignItems: "center",
    },
});

const Name = styled("h1", {
    color: "$accent",
    fontSize: "3.2rem",
    textTransform: "uppercase",
    textAlign: "center",
    
    "@bp2": {
        marginBottom: "3rem",
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
    "@bp2": {
        display: "none",
    },
});
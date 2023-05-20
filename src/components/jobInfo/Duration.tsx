import { styled } from "../../../stitches.config";

type Props = {
    startLabel:string;
    endLabel:string;
    start:string;
    end:string;
}

export default function Duration({ startLabel, endLabel, start, end }:Props) {
    return (
        <Wrapper>
            {start !== "" ? <Text>{startLabel} {start}</Text> : null}
            {end !== "" ? <Text>{endLabel} {end}</Text> : null}
        </Wrapper>
    );
}

const Wrapper = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end", 
});

const Text = styled("p", {
    color: "$accent",
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "0",
    whiteSpace: "nowrap",
});
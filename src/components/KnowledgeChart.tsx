import { ResponsiveBar } from "@nivo/bar";
import { styled } from "../../stitches.config";

export default function KnowledgeChart() {
    return (
        <Wrapper>
            <ResponsiveBar
                data={data}
                keys={[ "level" ]}
                indexBy="language"
                margin={{
                    top: 0, right: 0, bottom: 0, left: 80, 
                }} 
                padding={0.4}
                colors={"#FF914D"}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                layout="horizontal"
                tooltip={() => null}
                label={""}
                axisBottom={null}
                theme={{ axis: { ticks: { text: { fill: "#FEFEFA", fontSize:"1.4rem" } } } }}
                gridXValues={[]}  
                gridYValues={[]}
            />
        </Wrapper>
    );
}

const Wrapper = styled("div", {
    width: "100%",
    height: "16rem",
    marginBottom: "3rem",
});

const data = [
    {
        language: "CSS/SASS",
        level: 5,
    },
    {
        language: "Javascript",
        level: 5,
    },
    { 
        language: "Typescript",
        level: 5,
    },
    {
        language: "React",
        level: 5,
    },
    {
        language: "Php",
        level: 2,
    },
    {
        language: "Symfony",
        level: 2,
    },
    {
        language: "C#",
        level: 2,
    },

];
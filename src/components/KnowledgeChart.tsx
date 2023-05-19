import { ResponsiveBar } from "@nivo/bar";

export default function KnowledgeChart() {
    return (
        <ResponsiveBar
            data={data}
            keys={data.map(d => d.language)}
            indexBy="language"
        />
    );
}

const data = [
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
];
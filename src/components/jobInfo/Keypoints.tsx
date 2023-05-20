import { styled } from "../../../stitches.config";

type Props = {
    keypoints:string;
}
export default function Keypoints({ keypoints }:Props) {
    const bullets = keypoints.split("|");

    return (
        bullets.length > 0 ?
            <List>
                {bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                ))}
            </List> : null
    );
}

const List = styled("ul", {
    listStyleType: "disc",
    paddingLeft: "3rem",
    fontSize: "1.4rem",
    margin: "0",
    marginBottom: "2rem",
});
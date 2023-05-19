import { motion } from "framer-motion";
import { styled } from "../../stitches.config";
import { useStrings } from "../localization/hooks/useStrings";
import KnowledgeChart from "./KnowledgeChart";

type Props = {
    open: boolean;
};

const variants = {
    closed: { height: 0 },
    open: { height: "auto" },
};

export default function InfoDetails({ open }: Props) {
    const strings = useStrings();
    return (
        <motion.div
            animate={open ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <Wrapper>
                <Title>{strings.common$about}</Title>
                <Text bottomSpaced>
                    {strings.about$presentation}
                </Text>
                <Title>{strings.common$skills}</Title>
                <KnowledgeChart />
                <Title>{strings.common$contacts}</Title>
                <Text>
                    {strings.contacts$phone}<br /><Link href={"tel:" + strings.data$phone}> {strings.data$phone}</Link>
                </Text>
                <Text>
                    {strings.contacts$mail}<br /><Link href={"mailto:" + strings.data$mail}> {strings.data$mail}</Link>
                </Text>
                <Text>
                    {strings.contacts$address}<br />{strings.data$address}
                </Text>
            </ Wrapper>
        </motion.div>
    );
}

const Wrapper = styled("div", {
    overflow: "scroll",
    "@bp1": {
        overflow: "hidden",
    },

});


const Title = styled("h2", {
    fontSize: "1.7rem",
    fontWeight: "bold",
    color: "$accent",
    marginBottom: "0.5rem",
    textTransform: "uppercase",
});

const Text = styled("p", {
    fontSize: "1.4rem",
    color: "$background",
    marginBottom: "1rem",
    marginTop: "0",
    variants: {
        bottomSpaced: {
            true: {
                marginBottom: "3rem",
            },
        },
    },
});

const Link = styled("a", {
    color: "$background",
    textDecoration: "underline",
    "&:hover": {
        color: "$accent",
    },
});
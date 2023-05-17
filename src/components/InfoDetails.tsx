import { motion } from "framer-motion";
import { styled } from "../../stitches.config";

type Props = {
    open: boolean;
};

const variants = {
    closed: { height: 0 },
    open: { height: "auto" },
};

export default function InfoDetails({ open }: Props) {
    return (
        <motion.div
            animate={open ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <Wrapper>
                <Title>InfoDetails</Title>
                <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quasi, ullam quia, pariatur reiciendis veritatis, at animi earum cumque sint doloribus. Facere dolores quos illum assumenda nesciunt id iusto a!
                </p>
            </ Wrapper>
        </motion.div>
    );
}

const Wrapper = styled("div", {
   

});


const Title = styled("h2", {
    fontSize: "1.7rem",
    fontWeight: "bold",
    color: "$accent",
    marginBottom: "0.5rem",
    textTransform: "uppercase",
});
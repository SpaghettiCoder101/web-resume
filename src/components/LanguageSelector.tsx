import { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { styled } from "../../stitches.config";

export default function LanguageSelector() {
    const [language, setLanguage] = useState("EN");
    const controls = useAnimation();

    async function changeLanguage() {
        setLanguage(language === "EN" ? "IT" : "EN");
        
        await controls.start({
            x: 10,
            transition: { duration: 0.2 },
        });
        await controls.start({
            x: 0,
            transition: { duration: 0.2 },
        });
    }

    return (
        <Wrapper onClick={changeLanguage} animate={controls}>
            <AnimatePresence initial={false}>
                {language === "EN" && <Language
                    key="EN"
                    initial={{ x:-100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    
                >
                English {">"}
                </Language> }
                {language === "IT" && <Language
                    key="IT"
                    initial={{ x:-100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                Italiano {">"}
                </Language> }
            </AnimatePresence>
        </Wrapper>
    );
}

const Wrapper = styled(motion.button, {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    padding: "2rem 4rem",
    backgroundColor: "$dark",
    overflow: "hidden",
    boxShadow: "0 .2rem 1rem rgba(0, 0, 0, 0.5)",
    borderStyle: "none",
    borderWidth: "0",
    "&:focus":{
        outline: "none",
        borderStyle: "solid",
        borderWidth: "0.2rem",
        borderColor: "$accent",
    },
});

const Language = styled(motion.p, {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left:0,
    top: 0,
    bottom: 0,
    right: 0,
    margin: 0,
});
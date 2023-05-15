import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    theme: {
        colors: {
            accent: "#FF914D",
            dark:"#494E5F",
            background: "#FEFEFA",
        },
    },
    media: {
        bp1: "(min-width: 520px)",
        bp2: "(min-width: 900px)",
    },
});
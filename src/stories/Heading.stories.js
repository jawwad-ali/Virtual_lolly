import React from "react"
import Heading from "../components/Heading"

export default {
    title: "Heading",
    component: Heading
}

export const LP = () => (
    <Heading
        className={"heading"}
        className2={"tagline"}
        value={"virtual lollipop"}
        value2={"because we all know someone  who deserves some sugar. "}
    />
)
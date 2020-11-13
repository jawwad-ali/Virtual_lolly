import React from "react"
import Button from "../components/Button"

export default {
    title: "Button",
    component: Button
}

export const Btn = () => (
    <Button
        className={"homepage-btn"}
        value={"Make a new lolly to send a friend"}
    />
)
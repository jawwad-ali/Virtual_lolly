import React from 'react'
import Result from "../components/Result"

function Template({ pageContext }) {
    console.log(pageContext)
    return (
        <div>
            {/* {sender}
            {msg}
            {url}
            {rec}
            <Result url={url} rec={rec} sender={sender} msg={msg} /> */}
        </div>
    )
}

export default Template

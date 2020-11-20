import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Link } from "gatsby"

const getData = gql`{
    getVCard{
     id
     sender
        rec
        msg
        url
   }
 }`

function Result() {
    const [data, loading, error] = useQuery(getData)
    console.log(data)
    // let [lollydata, setLollydata] = useState()

    // console.log(data.pageContext.sender)

    return (
        <div>
            <h5>YAHA NAHI </h5>
            <Link to="/CreateLolly">
                CreateLolly
            </Link>
        </div>
    )
}

export default Result
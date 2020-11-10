import React, { useRef, useState } from "react"
import Lolly from "../components/lolly"
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const getData = gql`{
  getVCard{
    id
  }
}`

const addVCard_MUTATION = gql`
  mutation addVCard($c1:String! , 
      $c2:String!
      $c3:String!,
      $sender:String!,
      $rec:String!
      $msg:String!){
          addVCard(c1:$c1 ,c2:$c2,c3:$c3,sender:$sender,rec:$rec ,  msg:$msg){
            id
          }
  }
`

export default function Home() {

  // const { loading, data, error } = useQuery(getData)
  // console.log(data)

  const [c1, setC1] = useState("#d52358")
  const [c2, setC2] = useState("#e95946")
  const [c3, setC3] = useState("#deaa43")

  const handleSubmit = () => {
    console.log(senderField.current.value)
    console.log(recField.current.value)
    console.log(msgField.current.value)

    addVCard({
      variables: {
        c1, c2, c3,
        sender: senderField.current.value,
        rec: recField.current.value,
        msg: msgField.current.value
      }
    })
    senderField.current.value = ""
    recField.current.value = ""
    msgField.current.value = ""
  }

  const senderField = useRef()
  const recField = useRef()
  const msgField = useRef()

  const [addVCard] = useMutation(addVCard_MUTATION)

  return (
    <div>
      <div>
        <Lolly top={c1} middle={c2} bottom={c3} />
        <input type="color" value={c1} onChange={(e) => { setC1(e.target.value) }} />
        <input type="color" value={c2} onChange={(e) => { setC2(e.target.value) }} />
        <input type="color" value={c3} onChange={(e) => { setC3(e.target.value) }} />
      </div>
      <div>
        <input type="text" placeholder="TO" ref={recField} />
        <textarea placeholder="Write what you think" ref={msgField}></textarea>
        <input type="text" placeholder="FROM" ref={senderField} />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  )
}

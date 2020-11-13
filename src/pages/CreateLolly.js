import React, { useRef, useState } from "react"
import Lolly from "../components/lolly"
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import "./CreateLolly.css"
import 'bootstrap/dist/css/bootstrap.min.css';

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

export default function CreateLolly() {

  const formik = useFormik({
    initialValues: {
      recField: "",
      msgField: "",
      senderField: "",
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validate: (values) => {
      let error = {}

      if (!values.recField)
        error.recField = "recField is required"
      if (!values.msgField)
        error.msgField = "msgField is required"
      if (!values.senderField)
        error.senderField = "senderField is required"

      return error
    }

  })
  const [c1, setC1] = useState("#d52358")
  const [c2, setC2] = useState("#e95946")
  const [c3, setC3] = useState("#deaa43")

  const handleSend = () => {
    console.log(senderField.current.value)
    console.log(recField.current.value)
    console.log(msgField.current.value)

    if (!senderField.current.value, !recField.current.value, !msgField.current.value) {
      return false
    }

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
    <div className="data-container">
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <div className="lollyContainer">
            <Lolly top={c1} middle={c2} bottom={c3} />
            <div className="colorInputs">
              <input type="color" value={c1} onChange={(e) => { setC1(e.target.value) }} />
              <input type="color" value={c2} onChange={(e) => { setC2(e.target.value) }} />
              <input type="color" value={c3} onChange={(e) => { setC3(e.target.value) }} />
            </div>
          </div>
        </Grid>

        {/* <Grid item lg={6} xs={12}>
          <div className="form-container">

            <form onSubmit={formik.handleSubmit}>
              <label>To:</label>
              <input className="form-control" type="text" id="recField" placeholder="recever" onChange={formik.handleChange} ref={recField}
              />
              {formik.errors.recField ? <div>{formik.errors.recField}</div> : null}
              <br />
              <br />

              <textarea className="form-control" id="msgField" placeholder="Write what you think" onChange={formik.handleChange} ref={msgField}></textarea>
              {formik.errors.msgField ? <div>{formik.errors.msgField}</div> : null}
              <br />
              <br />

              <input className="form-control" id="senderField" type="text" placeholder="FROM" onChange={formik.handleChange} ref={senderField} /> <br /><br />
              {formik.errors.senderField ? <div>{formik.errors.senderField}</div> : null}

              <button className="btn btn-success" onClick={handleSend} id="login">Freez Lolly</button>

            </form>
          </div>
        </Grid> */}
      </Grid>

      {/* <div>

        <form onSubmit={formik.handleSubmit}>
          <label>To:</label>
          <input type="text" id="recField" placeholder="recever" onChange={formik.handleChange} ref={recField}
          />
          {formik.errors.recField ? <div>{formik.errors.recField}</div> : null}
          <br />
          <br />

          <textarea  id="msgField" placeholder="Write what you think" onChange={formik.handleChange} ref={msgField}></textarea>
          {formik.errors.msgField ? <div>{formik.errors.msgField}</div> : null}
          <br />
          <br />

          <input id="senderField" type="text" placeholder="FROM" onChange={formik.handleChange} ref={senderField} /> <br /><br />
          {formik.errors.senderField ? <div>{formik.errors.senderField}</div> : null}

          <button onClick={handleSend} id="login">Login</button>

        </form>
      </div> */}
    </div>




  )
}

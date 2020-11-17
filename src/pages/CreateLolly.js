import React, { useRef, useState } from "react"
import Lolly from "../components/lolly"
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import "./CreateLolly.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from "../components/Result"

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
      $rec:String!,
      $msg:String!,
      )
        {
        addVCard(c1:$c1 , c2:$c2, c3:$c3, sender:$sender, rec:$rec ,  msg:$msg  ){
          id
          sender
          rec
          link
          msg
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
      // console.log(values)
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
    // console.log(sender , rec , msg)
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
              <label htmlFor="topFlavor" className="colorPickerLabel">
                <input type="color" className="colorPicker" value={c1} onChange={(e) => { setC1(e.target.value) }} />
              </label>
              <label htmlFor="topFlavor" className="colorPickerLabel">
                <input type="color" className="colorPicker" value={c2} onChange={(e) => { setC2(e.target.value) }} />
              </label>
              <label htmlFor="topFlavor" className="colorPickerLabel">
                <input type="color" className="colorPicker" value={c3} onChange={(e) => { setC3(e.target.value) }} />
              </label>
            </div>
          </div>
        </Grid>

        <Grid item lg={6} xs={12}>
          <div className="form-container">

            <form onSubmit={formik.handleSubmit}>
              <label>To:</label>
              <input autoComplete="off" className="form-control text-field" type="text" id="recField" onChange={formik.handleChange} ref={recField}
              />
              {formik.errors.recField ? <div className="error">{formik.errors.recField}</div> : null}

              <br />

              <label>Say Something nice:</label>
              <textarea autoComplete="off" className="form-control text-field" id="msgField" onChange={formik.handleChange} ref={msgField}></textarea>
              {formik.errors.msgField ? <div className="error">{formik.errors.msgField}</div> : null}

              <br />

              <label>From:</label>
              <input autoComplete="off" className="form-control text-field" id="senderField" type="text" onChange={formik.handleChange} ref={senderField} /> <br /><br />
              {formik.errors.senderField ? <div className="error" >{formik.errors.senderField}</div> : null}

              <input type="submit" className="btn btn-dark" onClick={handleSend} id="login" value="Freez" />
            </form>
          </div>
        </Grid>
      </Grid>

    </div >
  )
}

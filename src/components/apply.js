import Datepicker from "react-datepicker";
import React, { useContext, useState } from 'react'
import MainContext from '../context/mainContext'
import "react-datepicker/dist/react-datepicker.css"
import '../css/apply.css'

export default function Apply() {
  const mainContext = useContext(MainContext)
  const { saveCandidateState, state, createCandidate } = mainContext
  const [startDate, setStartDate] = useState(new Date());
  const saveToContext = (e) => {
    saveCandidateState({ id: e.target.id, value: e.target.value })
  }

  const upload = (e) => {
    const files = e.target.files
    saveCandidateState({ id: e.target.id, value: files[0] })
  }

  const dateOfbirth = (date) => {
    setStartDate(date)
    saveCandidateState({ id: 'dateOfBirth', value: startDate.toISOString().slice(0, 10) })

  }


  return (
    <>
      <div className="member-info-body">
        <div className="member-info">
          <div className="member-info-area">
            <div className="member-info-form">
              <form id='createCandidateForm' onSubmit={() => {
                createCandidate();
              }}>
                <h4 className="text-center m-3">Fill your Information</h4>
                {state.applyedMessage}
                <div className="input-wrapper">
                  <div className="edit-member-input">
                    <label>Full Name:</label><br />
                    <input id='fullName' className="form-control mt-1" type="text" value={state.fullName} onChange={(e) => saveToContext(e)} required />
                  </div>
                  <div className="edit-member-input">
                    <label>Years Of Experiance:</label><br />
                    <input id='yearsOfExperiance' className="form-control mt-1" type="number" value={state.yearsOfExperiance} onChange={(e) => saveToContext(e)} required />
                  </div>
                </div>
                <div className="input-wrapper">
                  <div className="edit-member-input">
                    <label>Department:</label><br />
                    <select className="form-control mt-1"
                      value={state.department}
                      id="department"
                      name="status"
                      required
                      onChange={(e) => saveToContext(e)}
                    >
                      <option value={0}>Please select an option</option>
                      <option value="Finance">Finance</option>
                      <option value="IT">IT</option>
                      <option value="HR">HR</option>
                    </select>
                  </div>
                  <div className="edit-member-input">
                    <label>Date Of Birth:</label><br />
                    <Datepicker id='dateOfBirth' className="form-control mt-1" dateFormat='yyyy-MM-dd' value={state.dateOfbirth} selected={startDate} onChange={(date) => dateOfbirth(state.applyedMessage ? new Date() : date)} required />
                  </div>
                </div>
                <div className="input-wrapper">
                  <div className="input-wrapper">
                    <div className="edit-member-input">
                      <label>Upload Your CV:</label><br />
                      <input id='resume' className="form-control mt-1" type='file' onChange={(e) => upload(e)} name='file' required />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn-apply text-center" >apply</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

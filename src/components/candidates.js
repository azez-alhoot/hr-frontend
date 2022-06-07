import React, { useContext, useEffect } from 'react'
import MainContext from '../context/mainContext'
import { Table } from 'react-bootstrap';

export default function Candidates() {
  const mainContext = useContext(MainContext)
  const { state, getCandidates, downloadCv } = mainContext
  const { candidates } = state
  useEffect(() => {
    getCandidates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <h1 className='mb-5 mt-5 text-center'>Candi dates List</h1>
      <div className='mt-5'>
        <div className='col-md-8 offset-md-2'>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th className='text-center' scope="col">#</th>
                <th className='text-center' scope="col">Full Name</th>
                <th className='text-center' scope="col">Date Of Birth</th>
                <th className='text-center' scope="col">Years Of Experience</th>
                <th className='text-center' scope="col">Department</th>
                <th className='text-center' scope="col">Download CV</th>
              </tr>
            </thead>
            <tbody>
              {candidates && candidates.map((can, num) =>
              (<tr key={can.id}>
                <td className='text-center'>{num + 1}</td>
                <td className='text-center'>{can.full_name}</td>
                <td className='text-center'>{can.date_of_birth}</td>
                <td className='text-center'>{can.years_of_experience}</td>
                <td className='text-center'>{can.department}</td>
                <td className='text-center'>
                  <button className='btn' onClick={() => downloadCv(can.id)}>Download</button>
                </td>
              </tr>)
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

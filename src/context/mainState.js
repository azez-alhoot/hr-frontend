import React, { useReducer } from 'react'
import MainContext from './mainContext';
import MainReducer from './mainReducer'
import { SAVE_ADMIN_STATE, SAVE_CANDIDATE_REGISTRATION } from './types/types';
import axios from 'axios';
import download from 'downloadjs'
// import { useHistory } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

function MainState(props) {

    const initialState =
    {
        username: '',
        password: '',
        errorMsg: '',
        fullName: '',
        yearsOfExperiance: 0,
        department: '',
        dateOfBirth: '',
        resume: '',
        applyedMessage: '',
        candidates: []
    }

    const [state, setState] = useReducer(MainReducer, initialState);
    const saveAdminState = (action) => {
        setState({ type: SAVE_ADMIN_STATE, payload: action })
    }

    const saveCandidateState = (action) => {
        setState({ type: SAVE_CANDIDATE_REGISTRATION, payload: action })
    }

    const login = async (e) => {
        e.preventDefault();
        const data = {
            username: state.username,
            password: state.password
        }
        const headers = {
            'Content-Type': 'Application/JSON',
        }

        const url = 'http://localhost:8000/api/token/'


        await axios.post(url, data, { headers: headers }
        ).then((res) => {
            const token = res.data.access;
            localStorage.setItem('token', token);
            localStorage.setItem('authUser', true);

            window.location.href = '/candidates'
        }).catch((error) => {
                console.log('errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
                console.log(error);
                console.log('errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
            });
    }

    const resetForm = () => {
        document.getElementById("createCandidateForm").reset();
    }

    const createCandidate = async () => {

        const formData = new FormData()
        formData.append('full_name', state.fullName)
        formData.append('years_of_experience', state.yearsOfExperiance)
        formData.append('department', state.department)
        formData.append('date_of_birth', state.dateOfBirth)
        formData.append('resume', state.resume)

        const headers = {
            "content-type": 'multipart/form-data',
        }

        const url = 'http://localhost:8000/api/create/candidate/'

        await axios.post(url, formData,
            {
                headers: headers
            }).then(data => {
                if (data.status === 201) {
                    resetForm()
                    saveCandidateState({ id: 'applyedMessage', value: 'your application has successfully sent' })
                    
                } else {
                    saveCandidateState({ id: 'applyedMessage', value: 'something went wrong.. please try again later' })
                }
            }).catch(err => {
                saveCandidateState({ id: 'applyedMessage', value: 'something went wrong.. please try again later' })
            })
    }

    const getCandidates = async () => {

        const url = 'http://localhost:8000/api/candidates/list'
        const token = localStorage.getItem('token')
        const header = {
            "Content-Type": 'Application/JSON',
            "Authorization": `Bearer ${token}`
        }
        console.log('token', token);

        await axios.get(url, { headers: header })
            .then(data => {
                console.log(data);
                saveAdminState({ id: 'candidates', value: data.data })
            }).catch(err => {
                console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
                console.log(err);
            })
    }

    const downloadCv = async (id) => {
        const url = `http://localhost:8000/api/download/resume/${id}/`
        const token = localStorage.getItem('token')
        const header = {
            "Content-Type": 'application/msword',
            "Authorization": `Bearer ${token}`
        }

        await axios.get(url,
            {
                headers: header,
                responseType: 'blob'
            },

        ).then(res => {
            const fileName = res.headers['content-disposition']
            download(res.data, fileName, res.data)
        }).catch(err => {
            console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
        })
    }

    return (
        <MainContext.Provider value={{ state, saveAdminState, login, saveCandidateState, createCandidate, getCandidates, downloadCv }}>
            {props.children}
        </MainContext.Provider>
    )

}

export default MainState
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import {Auth} from 'aws-amplify'

const Login = (props) => {

    const initialState={
      username: '',
      password: '',
      isLoginSuccess: '',
      errorMsg: '',
      LoginString: 'Login'
    }
    const [formState, setFormState] = useState(initialState);

    const signInMe = async ()=> {
      try {
        setFormState(() => ({...formState, LoginString: 'Loading...'}))
        const user = await Auth.signIn(formState.username, formState.password);
        props.history.push("/dashboard")
        // console.log(user)
      } catch (error) {
        setFormState(() => ({...formState, isLoginSuccess: false, errorMsg: error.message}))
        console.log('error signing in', error)
      }
    }

    const onChange=(e)=>{
      e.persist()
      setFormState(() => ({...formState, [e.target.name]: e.target.value}))

      // console.log('formState' , formState)
    }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    
                    {formState.isLoginSuccess==false && formState.errorMsg !='' &&
                      <CAlert color="danger">{formState.errorMsg}</CAlert>
                    } 
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" autoComplete="username" name="username" onChange={onChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" name="password" onChange={onChange} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={signInMe}>{formState.LoginString}</CButton>
                      </CCol>
                      {/* <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>AFOD ADMIN</h2>
                    <p>Affordable Services at Your Door Steps. </p>
                    <Link to="/register">
                      {/* <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton> */}
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

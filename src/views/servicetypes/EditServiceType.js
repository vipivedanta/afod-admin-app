import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {connect} from 'react-redux'

const BasicForms = (props) => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const [serviceTypeName, setserviceTypeName] = React.useState(props.serviceType.serviceType)

  const handleChange=()=>{
      
  }

  console.log('props', props.serviceType.serviceType);
  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>
              Edit Service Type
              {/* <small> Type</small> */}
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="name">Service Type</CLabel>
                    <CInput id="name" placeholder="Service type name" required value={serviceTypeName} onChange={(e)=>setserviceTypeName(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                </CCol>
              </CRow>
              
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    
    </>
  )
}
const mapStateToProps = (state, ownProps)=>{
    let id= ownProps.match.params.id;
    return{
        serviceType: state.serviceType.items.find((item)=>{
            return item.id===id
        })
    }
}
export default connect(mapStateToProps)(BasicForms)

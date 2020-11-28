import React, {useEffect, useState} from 'react'
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
import {getService, updateService} from '../../actions/serviceAction'
import Fileupload from './../../classes/fileupload.class'

const EditService = (props) => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const [serviceName, setserviceName] = React.useState(props.services.serviceName)
  const [isLoading, setisLoading] = React.useState(false)
  const [thumbailFile, setthumbailFile] = React.useState('')

  useEffect(() => {
    const res = props.getServiceType(props.match.params.id);
  }, [])

  useEffect(() => {
    setserviceName(props.services.serviceName);
  }, [props.services.serviceName])

  const uploadFile=(e)=>{
    setthumbailFile(e.target.files[0]);
    console.log('thumbailFile:', thumbailFile);
  }

  const updateService=async ()=>{
      setisLoading(true);

      let payload = {
        serviveTypeName: props.services.serviceType,
        oldServiceName: props.services.serviceName,
        newServiceName: serviceName,
        fileUrl:''
      }

      if(thumbailFile){
        let fileObj = new Fileupload;
        let uploadFolder='services_images';
        fileObj.uploadFile(thumbailFile, uploadFolder, '')
        .then((obj)=>{
          payload.fileUrl=obj.url;
          update(payload);
        }).catch((err)=>{
            alert(err);
        });
      }
      else{
        update(payload);
      }
  }

  const update=(payload)=>{
      // console.log('payload:', payload);
      props.updateService(payload)
      .then(()=>{
        console.log('Job Completed');
        setisLoading(false);
        props.history.push("/services")
      }).catch(()=>{
        console.log('Job Failed');
        setisLoading(false);
      });
  }

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
                    <CLabel htmlFor="name">Service</CLabel>
                    <CInput id="name" placeholder="Service type name" required value={serviceName} onChange={(e)=>setserviceName(e.target.value)}/>
                  </CFormGroup>
                </CCol>
              </CRow>

              <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="name">Thumbnail</CLabel>
                      <CInputFile id="file-input" name="file-input" onChange={(e)=>uploadFile(e)}/>
                    </CFormGroup>
                  </CCol>
              </CRow>


              <CRow>
                <CCol xs="12">
                <CButton type="submit" size="sm" color="primary" onClick={updateService}><CIcon name="cil-scrubber" />{isLoading? 'Loading ...': 'Update'} </CButton>
                </CCol>
              </CRow>
              
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    
    </>
  )
}

const mapStateToDispatch = (dispatch) => {
  return {
      getServiceType: (id) => dispatch(getService(id)),
      updateService: (oldName, serviceName) => dispatch(updateService(oldName, serviceName)),
  }
}

const mapSateToProps=(state)=>({
  services: state.services.item,
})
export default connect(mapSateToProps, mapStateToDispatch)(EditService);

import React, { Component, useEffect, useState } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CLink,
  CRow,
  CImg
} from '@coreui/react'

import usersData from '../users/UsersData'
import { connect } from 'react-redux';
import {listAllServices} from '../../actions/serviceAction'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}


const fields = ['service', 'service_thumbnail', 'action']

const Services = (props) => {

  useEffect(() => {
    props.listAllServices();
  }, [])

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Manage Service Types
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={props.service}
              fields={fields}
              itemsPerPage={5}
              pagination

              scopedSlots = {
                {
                'action':
                  (item)=>(
                    <td>
                      <CLink to={`/edit-service/${item.id}`}>Edit</CLink>
                    </td>
                  ),
                  'service_thumbnail':
                  (item)=>(
                    <td>
                       <CImg src={item.service_thumbnail}  alt="" height={100} width={150}/>
                    </td>
                  )
                }
              }
            />
            </CCardBody>
          </CCard>
        </CCol>

    
      </CRow>
    </>
  )
}

const mapStateToProps = state => ({
  service: state.services.items,
});

export default connect(mapStateToProps, { listAllServices })(Services);

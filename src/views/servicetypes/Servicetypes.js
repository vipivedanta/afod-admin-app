import React, { Component, useEffect, useState } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CLink
} from '@coreui/react'
import { Link } from 'react-router-dom'

import usersData from '../users/UsersData'
import { connect } from 'react-redux';
import {fetchServiceTypes} from '../../actions/servicetypeAction'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}





const fields = ['serviceType', 'action']

const Servicetypes = (props) => {

  useEffect(() => {
    props.fetchServiceTypes();

  }, [])

  console.log('props', props);
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
              items={props.servicetypes}
              fields={fields}
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                        {item.status}
                    </td>
                  )

              }}
              
              scopedSlots = {{
                'action':
                  (item)=>(
                    <td>
                      <CLink to={`/edit-servicetype/${item.id}`} className="nav-link">Edit</CLink>
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>

    
      </CRow>
    </>
  )
}

const mapStateToProps = state => ({
  servicetypes: state.serviceType.items,
});

export default connect(mapStateToProps, { fetchServiceTypes })(Servicetypes);

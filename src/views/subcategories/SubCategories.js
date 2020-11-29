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
import {listAllServices} from '../../actions/subcategoryAction'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}


const fields = ['subCategory', 'subCategory_thumbnail', 'action']

const SubCategories = (props) => {

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
              items={props.subCategories}
              fields={fields}
              itemsPerPage={100}
              pagination

              scopedSlots = {
                {
                'action':
                  (item)=>(
                    <td>
                      <CLink to={`/edit-sub-categories/${item.id}`}>Edit</CLink>
                    </td>
                  ),
                  'subCategory_thumbnail':
                  (item)=>(
                    <td>
                       <CImg src={item.subCategory_thumbnail}  alt="" height={100} width={150}/>
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
  subCategories: state.subCategories.subCategoryItems,
});

export default connect(mapStateToProps, { listAllServices })(SubCategories);

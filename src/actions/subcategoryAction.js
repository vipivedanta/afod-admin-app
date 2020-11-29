import { LIST_SUBCATEGORIES, GET_SUBCATEGORY, UPDATE_SUBCATEGORY } from './types';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listServices, getServices } from '../graphql/queries'
import { updateServices } from '../graphql/mutations'
import { unique } from './functions'

import awsconfig from '../aws-exports'
Amplify.configure(awsconfig);

export const listAllServices = () => async dispatch => {
  try{
    const result = await API.graphql(graphqlOperation(listServices, 
      {
        filter:{ 
            subCategory:{
            contains:""
          }
        }, 
        limit:2000
      }));
    
    console.log('result', result);  
    const uniqueServiceTypes = unique(result, 'subCategory');
    console.log('uniqueService', uniqueServiceTypes);  
    dispatch({type: LIST_SUBCATEGORIES,payload: uniqueServiceTypes})
  }
  catch(e){
    console.log('Error in listServiceTypes', e)
  }
};



export const getService = (id) => async dispatch => {
  try{
    const result = await API.graphql(graphqlOperation(listServices, 
      {
        filter:{ 
          id:{beginsWith: id}
        },
        limit:2000
      }));
      
    const uniqueServiceTypes = unique(result, 'subCategory');
    dispatch({type: GET_SUBCATEGORY,payload: uniqueServiceTypes})
  }
  catch(e){
    console.log('Error in getService', e)
  }
};



export const updateService = (payload) => async dispatch => {
  try{
      const result = await API.graphql(graphqlOperation(listServices, 
      {
        filter:{ 
          subCategory:{beginsWith: payload.oldServiceName}
        },
        limit:2000
      }));
      
      let items = result.data.listServices.items;
      await bulkUpdate(items, payload);
      //dispatch({type: GET_SUBCATEGORY,payload: uniqueServiceTypes})
  }
  catch(e){
    console.log('Error in getServices', e)
  }
};


const bulkUpdate = (items, payload)=>{

    if(payload.fileUrl){
      items.forEach(element => {
            update({
            id: element.id,
            serviceType:payload.serviveTypeName,
            service:payload.newServiceName,
            subCategory_thumbnail:payload.fileUrl
          })
      });
    }
    else{
      items.forEach(element => {
        update({
        id: element.id,
        serviceType:payload.serviveTypeName,
        service:payload.newServiceName
      })
  });
    }
}


const update = async (updatePayload) => {
  try{
    await API.graphql(graphqlOperation(updateServices, {input: updatePayload}));
  }
  catch(e){
    console.log('Error in BulkUpdate:', e);
  }
}
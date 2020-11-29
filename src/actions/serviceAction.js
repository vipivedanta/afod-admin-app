import { LIST_SERVICETYPES, GET_SERVICETYPE, UPDATE_SERVICETYPES } from './types';
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
          serviceType:{
            contains:""
          }
        }, 
        limit:2000
      }));
    
    console.log('result', result);  
    const uniqueServiceTypes = unique(result, 'service');
    console.log('uniqueService', uniqueServiceTypes);  
    dispatch({type: LIST_SERVICETYPES,payload: uniqueServiceTypes})
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
        }
      }));
      
    const uniqueServiceTypes = unique(result, 'serviceType');
    dispatch({type: GET_SERVICETYPE,payload: uniqueServiceTypes})
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
          service:{beginsWith: payload.oldServiceName}
        },
        limit:2000
      }));
      
      let items = result.data.listServices.items;
      await bulkUpdate(items, payload);
      //dispatch({type: GET_SERVICETYPE,payload: uniqueServiceTypes})
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
            service_thumbnail:payload.fileUrl
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
import { FETCH_SERVICETYPES, UPDATE_SERVICETYPES } from './types';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listServices } from './../graphql/queries'
import { unique } from './functions'

import awsconfig from './../aws-exports'
Amplify.configure(awsconfig);

export const fetchServiceTypes = () => async dispatch => {

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
    
    const uniqueServiceTypes = unique(result, 'serviceType');
    dispatch({
      type: FETCH_SERVICETYPES,
      payload: uniqueServiceTypes
    })
  }
  catch(e){
    console.log('Error in fetchServiceTypes', e)
  }
  

};

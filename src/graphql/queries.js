/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getServices = /* GraphQL */ `
  query GetServices($id: String!, $serviceType: String!) {
    getServices(id: $id, serviceType: $serviceType) {
      id
      serviceType
      service
      category
      subCategory
      priceUnit
      standardPrice
      price2
      price3
      price4
      price5
      displayRate
      rateForToday
      rateForTomorrow
      rateForWeekend
      rateForLateHours
      rateForHoliday
      offerRate
      minimumServiceableRate
      addedOn
      addedBy
      updatedOn
      updatedBy
      brand
      withMaterial
    }
  }
`;
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: TableServicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        serviceType
        service
        category
        subCategory
        priceUnit
        standardPrice
        price2
        price3
        price4
        price5
        displayRate
        rateForToday
        rateForTomorrow
        rateForWeekend
        rateForLateHours
        rateForHoliday
        offerRate
        minimumServiceableRate
        addedOn
        addedBy
        updatedOn
        updatedBy
        brand
        withMaterial
        service_thumbnail
        subCategory_thumbnail
      }
      nextToken
    }
  }
`;
export const getPostedJobs = /* GraphQL */ `
  query GetPostedJobs($id: ID!) {
    getPostedJobs(id: $id) {
      id
      user_email
      scheduled_date
      requested_jobs
      vendor_email
      is_job_done
      vendor_comment
      total_amount
      user_comment
      status
      user_postcode
      scheduled_time
    }
  }
`;
export const listPostedJobs = /* GraphQL */ `
  query ListPostedJobs(
    $filter: TablePostedJobsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostedJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_email
        scheduled_date
        requested_jobs
        vendor_email
        is_job_done
        vendor_comment
        total_amount
        user_comment
        status
        user_postcode
        scheduled_time
      }
      nextToken
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createServices = /* GraphQL */ `
  mutation CreateServices($input: CreateServicesInput!) {
    createServices(input: $input) {
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
export const updateServices = /* GraphQL */ `
  mutation UpdateServices($input: UpdateServicesInput!) {
    updateServices(input: $input) {
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
export const deleteServices = /* GraphQL */ `
  mutation DeleteServices($input: DeleteServicesInput!) {
    deleteServices(input: $input) {
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
export const createPostedJobs = /* GraphQL */ `
  mutation CreatePostedJobs($input: CreatePostedJobsInput!) {
    createPostedJobs(input: $input) {
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
export const updatePostedJobs = /* GraphQL */ `
  mutation UpdatePostedJobs($input: UpdatePostedJobsInput!) {
    updatePostedJobs(input: $input) {
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
export const deletePostedJobs = /* GraphQL */ `
  mutation DeletePostedJobs($input: DeletePostedJobsInput!) {
    deletePostedJobs(input: $input) {
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

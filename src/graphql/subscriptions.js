/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateServices = /* GraphQL */ `
  subscription OnCreateServices($id: String, $serviceType: String) {
    onCreateServices(id: $id, serviceType: $serviceType) {
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
export const onUpdateServices = /* GraphQL */ `
  subscription OnUpdateServices($id: String, $serviceType: String) {
    onUpdateServices(id: $id, serviceType: $serviceType) {
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
export const onDeleteServices = /* GraphQL */ `
  subscription OnDeleteServices($id: String, $serviceType: String) {
    onDeleteServices(id: $id, serviceType: $serviceType) {
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
export const onCreatePostedJobs = /* GraphQL */ `
  subscription OnCreatePostedJobs(
    $id: ID
    $user_email: String
    $scheduled_date: AWSDate
    $requested_jobs: [AWSJSON]
    $vendor_email: String
  ) {
    onCreatePostedJobs(
      id: $id
      user_email: $user_email
      scheduled_date: $scheduled_date
      requested_jobs: $requested_jobs
      vendor_email: $vendor_email
    ) {
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
export const onUpdatePostedJobs = /* GraphQL */ `
  subscription OnUpdatePostedJobs(
    $id: ID
    $user_email: String
    $scheduled_date: AWSDate
    $requested_jobs: [AWSJSON]
    $vendor_email: String
  ) {
    onUpdatePostedJobs(
      id: $id
      user_email: $user_email
      scheduled_date: $scheduled_date
      requested_jobs: $requested_jobs
      vendor_email: $vendor_email
    ) {
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
export const onDeletePostedJobs = /* GraphQL */ `
  subscription OnDeletePostedJobs(
    $id: ID
    $user_email: String
    $scheduled_date: AWSDate
    $requested_jobs: [AWSJSON]
    $vendor_email: String
  ) {
    onDeletePostedJobs(
      id: $id
      user_email: $user_email
      scheduled_date: $scheduled_date
      requested_jobs: $requested_jobs
      vendor_email: $vendor_email
    ) {
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

import AWS from 'aws-sdk';
export default class Fileupload{

    constructor(){
        this.AWSRegion          = 'ap-southeast-1';
        this.AWSIdentityPoolId  = 'ap-southeast-1:b8e3c8e2-7da0-4391-9521-393c89d3c465'
        this.bucketName         = 'afod-mobile-app'
        this.s3FileBaseURL      = 'https://s3-ap-southeast-1.amazonaws.com'
        this.uploadedObjects    = []

        AWS.config.region = this.AWSRegion;
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: this.AWSIdentityPoolId // 2. Enter your identity pool
        });
    }

    
    UUID = function(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
    }

    checkAWSConfigError =function(){
        return new Promise((resolve, reject)=>{
            AWS.config.credentials.get(function(err){
                if (err){
                    reject({ message: 'Could not connect to S3 bucket.Please try again'});
                } 
                else{
                    resolve(true);
                }
              });
        })
    }

    uploadThisFile =function(fileToBeUploaded, uploadFolder, fileType){

        return new Promise((resolve, reject)=> {
              var bucket = new AWS.S3({
                  params: {
                      Bucket: this.bucketName
                  }
              });

              let fnamePrefix   = this.UUID()
              let filename      = fnamePrefix + '.' + fileToBeUploaded.name.split('.').pop();
              Object.defineProperty(fileToBeUploaded, 'name', {
                writable: true,value: filename
              });

              var bucketPath = [];
              if(uploadFolder != undefined) 
                bucketPath.push(uploadFolder)

              bucketPath.push(filename)
              let uploadedURL   = this.s3FileBaseURL + '/' + this.bucketName + '/' + bucketPath.join('/')
             
              
              if(fileToBeUploaded != ''){
                  var objKey = bucketPath.join('/')
                  var params = {
                      Key: objKey,
                      ContentType: fileToBeUploaded.type,
                      Body: fileToBeUploaded,
                      ACL: 'public-read'
                  };

                 bucket.putObject(params, (err, data) => {
                      if (err) {
                        reject(err);
                      } else {
                        this.uploadedObjects.push({Key:objKey})
                        resolve({ type : fileType , url : uploadedURL })
                      }
                  });
              }
              else{
                reject('Parameter Missing, File object & folder name are required');
              }
        })
    }
    
    deleteFiles = function(files){
        var bucket = new AWS.S3({
            params: {
                Bucket: this.bucketName
            }
        });

        let params = {
            Delete:{
                Objects: files
            }
        }

        console.log(params)
        bucket.deleteObjects(params,(error,data) => {
            console.log(error)
            console.log(data)
        })
    }

    uploadFile = function(fileToBeUploaded, uploadFolder,fileType){

        return this.checkAWSConfigError().then( result => this.uploadThisFile(fileToBeUploaded, uploadFolder, fileType) )
    }
}





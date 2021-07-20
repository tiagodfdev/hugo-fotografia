import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3"
import {configS3} from "../../commons/constants/creds"

const client = new S3Client(configS3)

async function getKeysFromBucket(bucket:string , prefix?:string) {
  // if want a specific album.
  if (prefix){
    const getObjectParams = {
      Bucket: bucket,
      Prefix: prefix
    }
    const command = new ListObjectsV2Command(getObjectParams)
    const response = await client.send(command)
    const filteredResponse = response.Contents.slice(1).map((currentKey)=>{
      return currentKey.Key
    })
    return filteredResponse
  }else{
    // if want all bucket.
    const getObjectParams = {
      Bucket: bucket
    }
    const command = new ListObjectsV2Command(getObjectParams)
    const response = await client.send(command)
    const isolatedContents = response.Contents.map((currentContent)=>{
      return currentContent.Key
    })
    return isolatedContents
  }
}

export default getKeysFromBucket
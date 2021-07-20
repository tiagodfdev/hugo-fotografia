import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"
import {configS3} from "../../commons/constants/creds"

const client = new S3Client(configS3)

async function getAllSignedUrl(bucket:string, keys:string[], expires:number) {
  const result = Promise.all(keys.map(async (key:string)=>{
    const getObjectParams = {Bucket:bucket, Key:key}
    const command = new GetObjectCommand(getObjectParams)
    const url = await getSignedUrl(client, command, { expiresIn: expires })
    return url
  }))
  return result
}

export default getAllSignedUrl
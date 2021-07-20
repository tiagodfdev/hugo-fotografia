import { S3ClientConfig } from "@aws-sdk/client-s3"
import { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";

export const configS3:S3ClientConfig = {
  credentials:{accessKeyId:process.env.AWS_ACCESS_KEY_ID, secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY}, 
  region: process.env.AWS_REGION
}

export const configDynamoDB:DynamoDBClientConfig = {
  credentials:{accessKeyId:process.env.AWS_ACCESS_KEY_ID, secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY}, 
  region: process.env.AWS_REGION
}
import { DynamoDBClient, PutItemCommand, PutItemCommandInput } from "@aws-sdk/client-dynamodb";
import {configDynamoDB} from "../../commons/constants/creds"

const client = new DynamoDBClient(configDynamoDB);

const createDatabaseImage = async(key:string) => {
  const input:PutItemCommandInput = {
    Item: {
     "nameId": {
       S: key
      }, 
     "likesCount": {
       N: "0"
      }, 
     "viewsCount": {
       N: '0'
      }
    },
    TableName: "hugo-fotografia"
   };
  const command = new PutItemCommand(input);

  const response = await client.send(command);
  return response
};
export default createDatabaseImage
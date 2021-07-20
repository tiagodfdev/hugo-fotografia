import { DynamoDBClient, GetItemCommand, GetItemCommandInput } from "@aws-sdk/client-dynamodb";
import {configDynamoDB} from "../../commons/constants/creds"

const client = new DynamoDBClient(configDynamoDB);

const fetchOneByKey = async(key:string) => {
  const input:GetItemCommandInput = {
    TableName:"hugo-fotografia", 
    Key:{
      "nameId": {
        S: key
      }
    }
  }
  const command = new GetItemCommand(input);

  const response = await client.send(command);
  return response
};
export default fetchOneByKey


import fetchOneByKey from "./read"
import { DynamoDBClient, UpdateItemCommand, UpdateItemCommandInput } from "@aws-sdk/client-dynamodb";
import {configDynamoDB} from "../../commons/constants/creds"

const client = new DynamoDBClient(configDynamoDB);
const updateViews = async(key:string) => {
  const getImageDb = await fetchOneByKey(key)
  const viewsCount = Number(getImageDb.Item.viewsCount.N)
  const viewsCountAdded = viewsCount+1
  const input:UpdateItemCommandInput = {
    TableName:"hugo-fotografia", 
    Key:{
      "nameId": {
        S: key
      }
    }, 
    ExpressionAttributeNames:{"#VC":"viewsCount"},
    ExpressionAttributeValues:{":v": {
      N:viewsCountAdded.toString()}},
    ReturnValues:"UPDATED_NEW",
    UpdateExpression:"SET #VC = :v"
  }
  const command = new UpdateItemCommand(input);

  const response = await client.send(command);
  return response
};
export default updateViews

import { DynamoDBClient, ScanCommand, ScanCommandInput } from "@aws-sdk/client-dynamodb";
import {configDynamoDB} from "../../commons/constants/creds"

const client = new DynamoDBClient(configDynamoDB);

const getTableInfoBefore = async() => {
  const input:ScanCommandInput = {
    ExpressionAttributeNames: {
      "#NI": "nameId",
    }, 
    ProjectionExpression: "#NI",
    TableName: "hugo-fotografia"
  }
  const command = new ScanCommand(input);

  const response = await client.send(command);
  return response.Items
};
export default getTableInfoBefore
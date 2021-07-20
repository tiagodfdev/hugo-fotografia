import { DynamoDBClient, ScanCommand, ScanCommandInput } from "@aws-sdk/client-dynamodb";
import {configDynamoDB} from "../../commons/constants/creds"

const client = new DynamoDBClient(configDynamoDB);

const getTableInfoAfter = async() => {
  const input:ScanCommandInput = {
    ExpressionAttributeNames: {
      "#NI": "nameId", 
      "#VC": "viewsCount",
    },
    ProjectionExpression: "#NI, #VC",
    TableName: "hugo-fotografia"
  }
  const command = new ScanCommand(input);

  const response = await client.send(command);
  return response.Items
};
export default getTableInfoAfter

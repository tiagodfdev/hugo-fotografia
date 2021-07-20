import { FinalObject } from './index.d';
export interface DBTable {
  nameId:string | AttributeValue,
  viewsCount:string | AttributeValue,
}
export interface FinalObject extends DBTable {
  urlLink:string | AttributeValue
}
export interface ISliderCard extends FinalObject{
  altName: string | AttributeValue;
}
export interface FinalObjectIndex extends FinalObject{
  index: string | AttributeValue;
}
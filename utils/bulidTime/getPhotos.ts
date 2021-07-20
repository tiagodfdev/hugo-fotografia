import getKeysFromBucket from './getKeysFromBucket';
import createDatabaseImage from './write'
import getTableInfoBefore from './getTableInfoBefore'
import getTableInfoAfter from './getTableInfoAfter'
import {DBTable,FinalObject} from '../../commons/types'
import getAllSignedUrl from './getSignedUrl';

export async function getPhotos(album?: string | null , keysParsed?: string[]) {
  // if you want specific album
  if(album){
    // get keys from S3 bucket
    const keys = await getKeysFromBucket('photography-web',album)
    // get names from DynamoDB table
    const arrayNameIdBefore = (await getTableInfoBefore()).map((currentNameId)=>{return currentNameId.nameId.S}) 
    // checks if keys exists in DynamoDB and include them if they do not exist
    keys.map((currentKey)=>{
      const result = arrayNameIdBefore.includes(currentKey)
      result ? null : createDatabaseImage(currentKey)
    })
    // get table db after includes and generate a [{}].
    const getTableAfterUpdate = (await getTableInfoAfter()).map((current)=>{
      const tableDBObject:DBTable = {
        nameId : current.nameId.S,
        viewsCount : current.viewsCount.N,
      }
      return tableDBObject
    })
    //generate object to render
    let tableToRender:DBTable[] =[]
    keys.map((currentKey)=>{
      getTableAfterUpdate.map((current)=>{
        if (current.nameId==currentKey){
          tableToRender.push(current)
        }
      })
    })
    // ensures that you will only pass arrays with 12 elements.
    const tableToRenderSliced = tableToRender.slice(0,12)
    // filter only keys
    const onlyKeys:string[] = tableToRenderSliced.map((current)=>{
      return current.nameId
    })
    //get urls of keys
    const signedUrls = await getAllSignedUrl('photography-web',onlyKeys,604800)
    const signedUrlsObj = signedUrls.map((current)=>({urlLink:current}))
    //mount final Object to render
    let finalObjectToRender:FinalObject[]=[]
    for (var i=0;i<12;i++){
      finalObjectToRender.push({...tableToRenderSliced[i],...signedUrlsObj[i]})
    }
    return finalObjectToRender



  // if you want specific photos
  }else{
    //get urls of keys
    const signedUrls = await getAllSignedUrl('photography-web',keysParsed,604800)
    const signedUrlsObj = signedUrls.map((current)=>({urlLink:current}))
    
  // get table db after includes and generate a [{}].
    const tableAfter = await getTableInfoAfter()
    const getTableAfterUpdate:DBTable[] = tableAfter.map((current)=>{
      const tableDBObject = {
        nameId : current.nameId.S,
        viewsCount : current.viewsCount.N,
      }
      return tableDBObject
    })

    const tableDbToRender:DBTable[] = getTableAfterUpdate.filter((current)=>{
      return keysParsed.includes(current.nameId)
    })


    
    //mount final Object to render table + links
    let finalObjectToRender:FinalObject[]=[]
    for (let i=0;i<tableDbToRender.length;i++){
      finalObjectToRender.push({...tableDbToRender[i],...signedUrlsObj[i]})
    }
  return finalObjectToRender
  }
}
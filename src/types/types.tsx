import { boolean } from "yup"


export interface Blank{
    id?:number,
    name?:string,
    rate?:number,
    count?:number,
    term?:number,
}

export enum ActionType{
    SET_BLANK="SET-BLANK",
    DELETE_BLANK="DELETE-BLANK",
    EDIT_BLANK="EDIT-BLANK",
    SEND_MORG="SEND-MORG"
}

export interface StateType{
    blank:any[],
    Sblank:{id:number,name:string,count:number,rate:number,term:number,stavka:number,max:number},
    morg:any,
    M:number

    
}
export type initialAction = SetBlnak | DeleteBlnak | EditBlnak | SendMorg

export interface SetBlnak{
    type:ActionType.SET_BLANK,
    blank:any[]
}
export interface DeleteBlnak{
    type:ActionType.DELETE_BLANK,
    id:number
}
export interface EditBlnak{
    type:ActionType.EDIT_BLANK,
    id:number
}

export interface SendMorg{
    type:ActionType.SEND_MORG,
    morg:{ DownPaymen:number,Ilian:number,nameBank:string}
}

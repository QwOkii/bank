import { ActionType, StateType, initialAction } from './../types/types';


const initialState:StateType={
    blank:[],
    Sblank:{
        id:0,
        name:'',
        count:0,
        rate:0,
        term:0,
        stavka:0,
        max:0
    },
    morg:{
        Ilian:0,
        DownPaymen:0,
        nameBank:''
    },
    M:0
    
}


const BlankReducer =(state=initialState,action:initialAction)=>{
    switch(action.type){
        case ActionType.SET_BLANK:{
            state.blank.push(action.blank)
            return{
                ...state,
            }
        }
        case ActionType.DELETE_BLANK:{
            state.blank.splice(action.id,1)
            return{
                ...state
            }
        }
        case ActionType.EDIT_BLANK:{
            let s={}
            state.blank.forEach(u =>{
                if(u.id===action.id){
                    s=u
                }
            })
            return{
                ...state,
                Sblank:s,
            }
        }
        case ActionType.SEND_MORG:{
            let M:number=0;
            state.blank.forEach(u=>{
                
                if(action.morg.nameBank===u.name && action.morg.Ilian <=u.max && action.morg.DownPaymen >=(action.morg.Ilian/ u.stavka)){
                   alert('ok')
                   let n=1
                   let r= Math.pow((1+(u.rate/12)),n);
                   M =((action.morg.Ilian-action.morg.DownPaymen)*r)/(r-1)
                   
                }
                else{
                }
            })
            return{
                ...state,
                M:Math.ceil(M)
            }
        }
        default:
        return state
            
    }
}

export default BlankReducer


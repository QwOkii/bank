import React, { useState } from "react";
import './BanksManegment.css';
import { Blank, StateType,} from "../../types/types";
import { Field, Form, Formik} from "formik";
import { useTypeSelector } from "../../hook/useTypeSelector";
import { useDispatch } from "react-redux";
import { setBlnakAC,deleteBlankAC,editBlankAC } from "../../redux/action-creator/blank";


const BanksManegment: React.FC<Blank>= (props)=>{
    const state:StateType = useTypeSelector(state=> state.data)
    const dispatch = useDispatch()
    let [id,setID]= useState(0)
    

    return(
        <div className="flex">
            <div>
                {state.blank.map((u:any)=>
                <div className="container-list" key={u.id}>
                    {u.name}
                    <button 
                    onClick={()=>{dispatch(editBlankAC(u.id))
                    console.log(state.blank.map(u =>{return u.id === state.Sblank.id}))}
                    
                    } >edit</button> <button onClick={()=>{dispatch(deleteBlankAC(u.id))}}>delete</button>
                    {
                    
                    state.blank.map(u =>{
                        if( u.id!==0 && u.id === state.Sblank.id){
                            console.log(u.id ,'+',state.Sblank.id)
                            return<div><form>
                            <div className="blankedit">
                            <p><label htmlFor="editname">назва банку</label></p>
                            <input name="editname" type="text" value={state.Sblank.name}/>
                            <p><label htmlFor="editcount">сума грошей</label></p>
                            <input name="editcount" type="text" value={state.Sblank.count}/>
                            <p><label htmlFor="editrate">річна ставка</label></p>
                            <input name="editrate" type="text" value={state.Sblank.rate}/>
                            <p><label htmlFor="editmax">максимальна сума кредиту</label></p>
                            <input name="editmax" type="text" value={state.Sblank.max}/>
                            <p><label htmlFor="editstavka">мінімальний внесок</label></p>
                            <input name="editstavka" type="text" value={state.Sblank.stavka}/>
                            <p><label htmlFor="editterm">термін кредиту в місяцях</label></p>
                            <input name="editterm"type="text" value={state.Sblank.term}/>
                            <button>save</button>
                            </div>
                            </form></div>
                            
                        }
                        })}
                </div>)}
                
            </div>
            <div className="container">
            
            <Formik
            initialValues={{name:'',rate:null,count:null,term:null,stavka:null,max:null}}
            validate={values =>{

            }}
            onSubmit={
                (value)=>{
                    let {count,name,rate,term,max,stavka}=value
                    setID(id+1)
                    dispatch(setBlnakAC({id,name,count,rate,term,stavka,max}))
                }
            }
            
            >
            <Form>
                <Field  name={'name'} placeholder={'назва банку'}></Field>
                <Field name={'rate'} placeholder={'Відсоткова ставка'}></Field>
                <Field name={'count'} placeholder={'сума іпотеки'}></Field>
                <Field name={'max'} placeholder={'максимальна сума позики'}></Field>
                <Field name={'stavka'} placeholder={'мінімальний внесок %'}></Field>
                <Field name={'term'} placeholder={'Строк кредиту'}></Field>
                <button type="submit">Send</button>
            </Form>
                
            </Formik>
        </div>
        </div>
        
    );
}

export default BanksManegment;
import React from "react";
import {Field,Formik,Form} from 'formik'
import {StateType,} from "../../types/types";
import { useTypeSelector } from "../../hook/useTypeSelector";
import { useDispatch } from "react-redux";
import './Mortgage.css'
import { sendMorgageAC } from "../../redux/action-creator/blank";

interface MortgageProps{

}

const Mortgage:React.FC<MortgageProps> =(props)=>{
    const state:StateType = useTypeSelector(state=> state.data)
    const dispatch = useDispatch()
    
    return(
        <div className="container">
            <Formik
            initialValues={{Ilian:null,DownPaymen:null,nameBank:''}}
            onSubmit={(value)=>{
                console.log(value)
                dispatch(sendMorgageAC(value))
            }}
            >
                <Form>
                    <Field name={'Ilian'} placeholder={'сума кредиту'}></Field>
                    <Field name={'DownPaymen'} placeholder={'перший внесок'}></Field>
                    <Field name={'nameBank'} placeholder={'назва банку'}></Field>
                    <button type="submit">send</button>
                    <h4>Mounthly paymen:{state.M} $</h4>
                </Form>
            </Formik>
        </div>
    );
}

export default Mortgage;
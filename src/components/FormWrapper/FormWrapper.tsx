import React from 'react'
import {useForm} from 'react-hook-form'
import {useMultiStepForm} from '../../../hooks/useMultiStepForm'
import { FirstStep } from '../FirstStep/FirstStep'
import { SecoundStep } from '../SecoundStep/SecoundStep'
import { ThirdStep } from '../ThirdStep/ThirdStep'
export const FormWrapper = () => {
    const { register ,handleSubmit,getValues} = useForm();
    const {formStep,handleNextStep,handlePrevStep,stepToRender,lastFormStep} = useMultiStepForm([<FirstStep register={register}  />,<SecoundStep register={register}/>,<ThirdStep register={register}/>]);
  
    const onSubmit = (data:any) => {
  
      if(lastFormStep) {
        console.log(getValues())
        return console.log('fetch')
  
      }
     
      handleNextStep();
     
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
    {stepToRender}
    <button type="button" onClick={handlePrevStep}>prev</button>
   <button type="submit" >next</button>
    </form>
    )
}
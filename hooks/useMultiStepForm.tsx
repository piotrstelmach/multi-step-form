import React,{ReactNode, useState} from 'react'




export const useMultiStepForm = (steps:ReactNode[]) => {
    const [formStep,setFormStep] = useState(0);
    const lastFormStep = steps.length -1;
    const stepToRender = steps[formStep];
    const [formData,setFormData] = useState(null);



    // const handleUpdateValue = (valuesToUpdate:any) => {
    //     setFormData((prevState:any) => (
    //         {
    //             ...prevState,
    //             ...valuesToUpdate,
    //         }
    //     ))
    // }

    const handleSubmit = () => {
        console.log('submit')
    }

    const handleNextStep = () => {
        if(formStep === lastFormStep) {
            return handleSubmit();
        }

        setFormStep((prevState) => prevState + 1);
    }

    const handlePrevStep = () => {
        if(formStep === 0) return;
        setFormStep((prevState) => prevState -1);
    }

    return {
        handlePrevStep,
        handleNextStep,
        lastFormStep,
        formStep,
        stepToRender,
    }
}
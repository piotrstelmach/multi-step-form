import {ReactNode, useState} from 'react'




export const useMultiStepForm = (steps:ReactNode[]) => {
    const [formStep,setFormStep] = useState(0);
    const lastFormStep = steps.length -1 === formStep;
    const stepToRender = steps[formStep];

    const handleNextStep = () => {
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
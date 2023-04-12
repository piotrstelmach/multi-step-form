import { useState } from 'react'
import {useMultiStepForm} from '../hooks/useMultiStepForm'
import { useForm } from "react-hook-form";


const FirstStep = () => {
  const { register } = useForm();
  return (
    <div>
      step 1
      <div className="input-wrapper">
     <label htmlFor="name">
        Name
       <input id="name" defaultValue="" {...register("name")} />
       </label>

       <label htmlFor="lastName">
        Last Name
       <input id="lastName" defaultValue="" {...register("lastName")} />
       </label>
     </div>
     
  </div>
  )
}
const SecoundStep = () => {
  const { register } = useForm();
  return (
    
    <div>
    step 2
    <div className="input-wrapper">
   <label htmlFor="phone">
      phone number
     <input id="phone" defaultValue="" {...register("phone")} />
     </label>
   </div>

   
</div>
  )
}
const ThirdStep = () => {
  const { register } = useForm();
  return (
    <div>
      step 3
      <div className="input-wrapper">
   <label htmlFor="email">
      email
     <input id="email" defaultValue="" {...register("email")} />
     </label>
   </div>
</div>
  )

}


function App() {

  const {formStep,handleNextStep,handlePrevStep,stepToRender} = useMultiStepForm([<FirstStep/>,<SecoundStep/>,<ThirdStep/>]);


  return (
    <div className="App">
      <h1>Multistep</h1>
    
        {stepToRender}
  
      <button type="button" onClick={handlePrevStep}>prev</button>
      <button type="button" onClick={handleNextStep}>next</button>
    </div>
  )
}

export default App

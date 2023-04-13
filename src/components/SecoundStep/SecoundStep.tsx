export const SecoundStep = ({register}:any) => {

  
  
  
    return (
      <div >
      step 2
      <div className="input-wrapper">


       <label htmlFor="lastName">
       phone
       <input id="phone" defaultValue="" {...register("phone",{required:true})} />
       </label>
     </div>

  </div>
    )
  }
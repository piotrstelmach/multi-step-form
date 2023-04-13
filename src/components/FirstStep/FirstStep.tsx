export const FirstStep = ({register}:any) => {

  
  
  
    return (
      <div >
        step 1
        <div className="input-wrapper">
       <label htmlFor="name">
          Name
         <input id="name" defaultValue="" {...register("name",{required:true})} />
         </label>
  
         <label htmlFor="lastName">
          Last Name
         <input id="lastName" defaultValue="" {...register("lastName",{required:true})} />
         </label>
       </div>
  
    </div>
    )
  }
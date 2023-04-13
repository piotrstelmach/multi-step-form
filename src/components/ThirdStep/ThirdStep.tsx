export const ThirdStep = ({register}:any) => {

  
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
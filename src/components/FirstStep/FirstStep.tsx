export const FirstStep = ({ register }: any) => {
  return (
    <div>
      step 1
      <div className="input-wrapper">
        <label htmlFor="firstName">
          Name
          <input
            id="firstName"
            defaultValue=""
            {...register("firstName", { required: true })}
          />
        </label>

        <label htmlFor="lastName">
          Last Name
          <input
            id="lastName"
            defaultValue=""
            {...register("lastName", { required: true })}
          />
        </label>
      </div>
    </div>
  );
};

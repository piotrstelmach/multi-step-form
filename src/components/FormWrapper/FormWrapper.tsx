import { useForm, FieldValues } from "react-hook-form";
import { useMultiStepForm } from "../../../hooks/useMultiStepForm";
import { FirstStep } from "../FirstStep/FirstStep";
import { SecoundStep } from "../SecoundStep/SecoundStep";
import { ThirdStep } from "../ThirdStep/ThirdStep";
import { registerUser } from "../../../services/index";

export const FormWrapper = () => {
  const { register, handleSubmit, getValues } = useForm();
  const { handleNextStep, handlePrevStep, stepToRender, lastFormStep } =
    useMultiStepForm([
      <FirstStep register={register} />,
      <SecoundStep register={register} />,
      <ThirdStep register={register} />,
    ]);

  const onSubmit = (data: FieldValues) => {
    if (lastFormStep) {
      return registerUser(data);
    }

    handleNextStep();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {stepToRender}
      <button type="button" onClick={handlePrevStep}>
        prev
      </button>
      <button type="submit">next</button>
    </form>
  );
};

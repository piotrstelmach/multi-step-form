import { FieldValues } from "react-hook-form";

export const registerUser = async (formData: FieldValues) => {
  const { firstName, lastName, email, phone } = formData;
  const user = {
    firstName,
    lastName,
    email,
    phone,
  };

  try {
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    if (response.ok) {
      console.log(result, "result");
      return alert("User utworzony");
    }
    console.log(alert("Błąd"));
  } catch (error) {
    console.log(error, alert("Błąd"));
  }
};

"use server";

export async function submitForm(formData: FormData) {
  console.log(formData.get("email"));
}

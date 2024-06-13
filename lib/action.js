"use server";

// SERVER ACTIONS
export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creatorEmail: formData.get("email"),
  };
  console.log(meal);
}

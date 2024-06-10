export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>More Details</h1>
      <p>{params.mealSlug}</p>
    </main>
  );
}

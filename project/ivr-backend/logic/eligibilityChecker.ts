export async function checkEligibility(age: number, income: number) {
  // Fetch schemes from database or external source
  const schemes = await fetchSchemes();

  return schemes.filter((s) => age >= s.minAge && income <= s.maxIncome);
}

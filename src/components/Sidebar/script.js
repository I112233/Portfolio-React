function calculateExactAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();

  // Check if the birthday hasn't occurred yet this year
  const hasBirthdayPassed =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  if (!hasBirthdayPassed) {
    age -= 1;
  }
  return age;
}

function showExactAge() {
  const birthDate = "2002-01-14"; // Replace with your birthdate (YYYY-MM-DD)
  const age = calculateExactAge(birthDate);
  document.getElementById("age").textContent = ` Ido Roth (${age})`;
}

showExactAge();

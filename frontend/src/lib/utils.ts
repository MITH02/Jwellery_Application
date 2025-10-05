export function calculateInterestRate(amount: number): number {
  if (amount <= 50000) {
    return 3.0;
  } else if (amount <= 100000) {
    return 2.5;
  } else {
    return 2.0;
  }
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function calculateMonthlyInterest(amount: number): number {
  const rate = calculateInterestRate(amount);
  return (amount * rate) / 100;
}
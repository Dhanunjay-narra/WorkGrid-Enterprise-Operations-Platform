export function generateFinanceBankingProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

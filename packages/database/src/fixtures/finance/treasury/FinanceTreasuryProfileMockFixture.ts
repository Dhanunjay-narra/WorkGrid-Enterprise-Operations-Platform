export function generateFinanceTreasuryProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

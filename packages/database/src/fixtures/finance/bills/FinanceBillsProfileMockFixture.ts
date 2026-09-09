export function generateFinanceBillsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

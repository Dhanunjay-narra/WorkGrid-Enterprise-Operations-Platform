export function generateFinanceTreasuryTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

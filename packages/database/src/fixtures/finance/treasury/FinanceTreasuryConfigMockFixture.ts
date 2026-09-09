export function generateFinanceTreasuryConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

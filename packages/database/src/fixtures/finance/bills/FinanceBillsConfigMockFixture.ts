export function generateFinanceBillsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

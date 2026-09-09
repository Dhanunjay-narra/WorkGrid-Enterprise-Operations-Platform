export function generateFinanceBankingConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

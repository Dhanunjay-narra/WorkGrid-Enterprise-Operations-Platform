export function generateFinanceTaxesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

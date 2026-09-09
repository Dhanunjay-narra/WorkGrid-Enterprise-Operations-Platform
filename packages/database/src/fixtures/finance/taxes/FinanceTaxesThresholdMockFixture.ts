export function generateFinanceTaxesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

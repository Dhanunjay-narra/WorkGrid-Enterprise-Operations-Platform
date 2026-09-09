export function generateFinanceTaxesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

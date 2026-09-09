export function generateFinanceTaxesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

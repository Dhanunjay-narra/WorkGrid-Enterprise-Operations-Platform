export function generateFinanceTaxesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

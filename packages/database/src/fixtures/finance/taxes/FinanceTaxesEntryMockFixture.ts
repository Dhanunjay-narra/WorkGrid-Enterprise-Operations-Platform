export function generateFinanceTaxesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateFinanceTaxesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

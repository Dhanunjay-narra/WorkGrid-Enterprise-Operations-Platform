export function generateFinanceTaxesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

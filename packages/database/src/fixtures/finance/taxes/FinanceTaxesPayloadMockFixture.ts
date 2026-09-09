export function generateFinanceTaxesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

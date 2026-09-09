export function generateFinanceBillsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

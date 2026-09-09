export function generateFinanceTreasuryPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateFinanceTreasuryMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

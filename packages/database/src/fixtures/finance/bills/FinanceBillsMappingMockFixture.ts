export function generateFinanceBillsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

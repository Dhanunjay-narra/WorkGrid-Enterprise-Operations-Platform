export function generateFinanceTreasuryRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

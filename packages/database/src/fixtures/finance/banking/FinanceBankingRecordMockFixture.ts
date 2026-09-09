export function generateFinanceBankingRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateFinanceBillsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

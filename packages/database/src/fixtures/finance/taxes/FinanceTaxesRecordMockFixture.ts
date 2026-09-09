export function generateFinanceTaxesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

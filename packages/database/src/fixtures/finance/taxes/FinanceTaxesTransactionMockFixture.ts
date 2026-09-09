export function generateFinanceTaxesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

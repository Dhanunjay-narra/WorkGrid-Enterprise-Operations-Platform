export function generateFinanceTreasuryTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

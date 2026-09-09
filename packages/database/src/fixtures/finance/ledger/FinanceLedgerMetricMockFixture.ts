export function generateFinanceLedgerMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

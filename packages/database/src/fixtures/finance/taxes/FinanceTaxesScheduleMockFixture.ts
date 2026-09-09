export function generateFinanceTaxesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

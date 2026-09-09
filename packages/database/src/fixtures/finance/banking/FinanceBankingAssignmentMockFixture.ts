export function generateFinanceBankingAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

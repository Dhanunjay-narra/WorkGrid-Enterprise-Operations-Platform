export function generateFinanceTreasuryAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

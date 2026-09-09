export function generateFinanceBillsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

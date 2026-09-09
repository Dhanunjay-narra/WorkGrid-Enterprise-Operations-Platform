export function generateFinanceTaxesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

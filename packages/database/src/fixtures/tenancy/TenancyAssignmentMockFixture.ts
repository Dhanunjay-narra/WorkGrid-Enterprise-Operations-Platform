export function generateTenancyAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

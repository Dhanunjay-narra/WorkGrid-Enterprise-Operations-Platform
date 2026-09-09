export function generateCrmHealthAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

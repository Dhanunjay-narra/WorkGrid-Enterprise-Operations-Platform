export function generateCrmTerritoryAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateCrmTerritorySnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritorySnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

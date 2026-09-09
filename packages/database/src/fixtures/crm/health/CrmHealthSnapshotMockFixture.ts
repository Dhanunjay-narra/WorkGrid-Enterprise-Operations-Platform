export function generateCrmHealthSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

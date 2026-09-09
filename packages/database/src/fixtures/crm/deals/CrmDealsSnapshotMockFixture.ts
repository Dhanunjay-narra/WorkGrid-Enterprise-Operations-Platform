export function generateCrmDealsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

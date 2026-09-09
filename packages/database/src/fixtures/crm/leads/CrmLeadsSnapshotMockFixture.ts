export function generateCrmLeadsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateCrmContactsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

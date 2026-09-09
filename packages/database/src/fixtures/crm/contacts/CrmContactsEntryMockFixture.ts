export function generateCrmContactsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

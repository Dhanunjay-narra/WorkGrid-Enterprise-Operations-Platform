export function generateCrmContactsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

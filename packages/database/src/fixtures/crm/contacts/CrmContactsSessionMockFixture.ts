export function generateCrmContactsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

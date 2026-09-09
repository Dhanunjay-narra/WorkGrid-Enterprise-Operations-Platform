export function generateCrmContactsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

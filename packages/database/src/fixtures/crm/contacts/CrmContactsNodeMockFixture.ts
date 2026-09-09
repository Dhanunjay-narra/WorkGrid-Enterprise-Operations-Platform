export function generateCrmContactsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

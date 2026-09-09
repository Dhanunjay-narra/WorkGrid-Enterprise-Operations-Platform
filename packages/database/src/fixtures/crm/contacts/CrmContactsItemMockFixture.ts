export function generateCrmContactsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

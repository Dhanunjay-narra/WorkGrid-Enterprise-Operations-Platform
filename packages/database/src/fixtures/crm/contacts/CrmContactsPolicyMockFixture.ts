export function generateCrmContactsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

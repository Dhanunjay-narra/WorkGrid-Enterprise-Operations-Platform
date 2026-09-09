export function generateCrmContactsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateCrmContactsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

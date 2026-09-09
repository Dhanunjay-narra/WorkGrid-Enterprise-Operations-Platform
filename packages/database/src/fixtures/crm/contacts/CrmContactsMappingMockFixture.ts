export function generateCrmContactsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

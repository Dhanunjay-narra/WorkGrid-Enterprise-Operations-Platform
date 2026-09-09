export function generateCrmContactsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

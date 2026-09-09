export function generateCrmContactsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

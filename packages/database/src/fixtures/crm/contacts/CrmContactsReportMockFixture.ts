export function generateCrmContactsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

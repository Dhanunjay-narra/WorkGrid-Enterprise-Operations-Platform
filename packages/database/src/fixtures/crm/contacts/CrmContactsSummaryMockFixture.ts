export function generateCrmContactsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

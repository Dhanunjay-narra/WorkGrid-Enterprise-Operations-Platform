export function generateCrmAccountsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

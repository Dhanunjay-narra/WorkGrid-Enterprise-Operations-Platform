export function generateCrmAccountsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

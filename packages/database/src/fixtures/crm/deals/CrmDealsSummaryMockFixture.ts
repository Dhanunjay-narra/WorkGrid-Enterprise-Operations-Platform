export function generateCrmDealsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

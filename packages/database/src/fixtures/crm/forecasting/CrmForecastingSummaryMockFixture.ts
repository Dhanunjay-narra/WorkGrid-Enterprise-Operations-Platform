export function generateCrmForecastingSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

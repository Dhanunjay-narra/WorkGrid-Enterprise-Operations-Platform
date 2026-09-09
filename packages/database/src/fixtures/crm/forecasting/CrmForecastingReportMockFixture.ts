export function generateCrmForecastingReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

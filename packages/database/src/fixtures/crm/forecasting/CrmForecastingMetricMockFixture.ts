export function generateCrmForecastingMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

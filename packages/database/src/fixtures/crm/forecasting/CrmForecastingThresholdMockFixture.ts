export function generateCrmForecastingThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

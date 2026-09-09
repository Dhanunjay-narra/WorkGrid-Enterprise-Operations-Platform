export function generateCrmForecastingMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

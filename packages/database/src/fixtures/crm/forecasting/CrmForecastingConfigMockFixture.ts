export function generateCrmForecastingConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

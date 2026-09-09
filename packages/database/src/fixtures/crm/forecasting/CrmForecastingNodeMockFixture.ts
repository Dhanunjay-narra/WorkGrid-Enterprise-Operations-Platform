export function generateCrmForecastingNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

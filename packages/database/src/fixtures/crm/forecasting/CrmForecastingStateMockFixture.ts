export function generateCrmForecastingStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

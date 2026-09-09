export function generateCrmForecastingSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_forecasting",
    entity: "CrmForecastingSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
